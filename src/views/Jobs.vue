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
            <div class="container" id="job-loading">
              <p>Click the button above to get started</p>
            </div>

            <div class="container" style="display:none" id="job-results">
              <div id="job-result" v-for="job in data.jobs" v-bind:key="job.id">
                <h2>
                  <a v-bind:href="job.url" target="_blank">{{job.title}}</a>
                </h2>
                <p>at {{job.company.name}}</p>
                <p>
                  <a v-bind:href="job.url" target="_blank" class="btn btn-sm">Learn More</a>
                </p>
                <hr class="divider">
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
        $("#job-loading").html('<div class="loader"/>');

        setTimeout(() => {
          $("#job-loading").css("display", "none");
          $("#job-results").css("display", "block");
        }, 1000);
      });
    });
  }
};
</script>

<style scoped>
@import "../styles/jobs.css";
</style>
