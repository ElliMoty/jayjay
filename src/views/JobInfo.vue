<template>
  <div class="job-graphql">
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
              <div v-if="job.id === $route.params.id">
                  <h1>{{job.title}}</h1>
                  <p>{{job.jobType}}</p>

              </div>
          </div>
        </div>

        <!-- No result -->
        <div v-else class="no-result apollo">No result :(</div>
      </template>
    </ApolloQuery>
  </div>
</template>

<style scoped>
</style>
