<template>
  <div class="add-job">
    <ApolloMutation :mutation="require('../graphql/AddJob.gql')" 
    :refetchQueries="true"
    :variables="{ newJobData: { title, coName, salary } }">
      <template slot-scope="{ mutate, loading, error }">
        <div>
          <form action>
            <label for>Job Title</label>
            <input type="text" v-model="title" placeholder="Job Title">
            <p>Title is: {{ title }}</p>

            <label for>Company Name</label>
            <input type="text" v-model="coName" placeholder="Job Title">
            <p>Company Name is: {{ coName }}</p>

            <label for>Salary</label>
            <input type="text" v-model="salary" placeholder="Job Title">
            <p>Salary is: {{ salary }}</p>
          </form>
        </div>

        <button :disabled="loading" @click="mutate()">Add Job</button>
        <p v-if="error">An error occured: {{ error }}</p>

      </template>
    </ApolloMutation>
  </div>
</template>

<script>
export default {
  name: "add-job",
  data() {
    return {
      title: "",
      salary: "",
      coName: ""
    };
  }
};
</script>




