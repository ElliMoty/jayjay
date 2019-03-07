<template>
  <div class="job-list">
    <!-- button for finding job -->
    <button class="btn" id="search-jobs" title="Search for a job on Codepen">Find a job</button>

    <div class="jobs-graphql">
      <!-- Apollo watched Graphql query -->
      <ApolloQuery :query="require('../graphql/Jobs.gql')">
        <template slot-scope="{ result: { loading, error, data } }">
          <!-- Loading -->
          <div v-if="loading" class="loading apollo">Loading...</div>

          <!-- Error -->
          <div v-else-if="error" class="error apollo">An error occured</div>

          <!-- Result -->
          <div v-else-if="data" class="result apollo">
            <div class="container" id="job">
              <p>Click the button above to get started</p>

              <div class="hidden" id="job-result" v-for="job in data.jobs" v-bind:key="job.id">
                <h2>
                  <a href="#" target="_blank">{{job.title}}</a>
                </h2>
                <p>at {{job.company.name}}</p>
                <p>
                  <a href="#" target="_blank" class="btn btn-sm">Learn More</a>
                </p>
              </div>
            </div>

          </div>

          <!-- No result -->
          <div v-else class="no-result apollo">No result :(</div>
        </template>
      </ApolloQuery>
    </div>
  </div>
</template>

<script>
export default {
  name: "job-list",
  mounted() {
    this.$nextTick(() => {
      $("#search-jobs").on("click", () => {
        $("#job").html('<div class="loader"/>');

        setTimeout(() => {
          $("#job").html('');
        }, 1000);

        $(".hidden").css("display", "block");


      });
    });
  }
};
</script>

<style scoped>
@import "../styles/jobs.css";
</style>
