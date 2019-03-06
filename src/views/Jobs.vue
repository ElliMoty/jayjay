<template>
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
          <div v-for="job in data.jobs" v-bind:key="job.id">
            <ul>
              <li>
                <router-link class="job-title" v-bind:to="'/jayjay/jobs/' + job.id">
                  <h2>{{ job.title }}</h2>
                </router-link>
                {{ job.company.name}}
                <br>
                {{ job.company.location }} > <span class="gray">{{ job.company.area }}</span> 
                <br>
                {{ job.salary }}
              </li>
            </ul>
          </div>
        </div>

        <!-- No result -->
        <div v-else class="no-result apollo">No result :(</div>
      </template>
    </ApolloQuery>
  </div>
</template>

<script>
export default {
  name: "jobs-graphql",
  data() {
    return {
      authenticated: true,
    }
  }
}
</script>

<style scoped>
  ul {
    list-style-type: none;
  }
  .job-title {
    cursor: pointer;
  }
  .gray {
    color: gray;
    font:
  }
</style>
