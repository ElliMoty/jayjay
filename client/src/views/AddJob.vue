<template>
  <div class="add-job">
    <ApolloMutation
      :mutation="require('../graphql/AddJob.gql')"
      :refetchQueries="['GetAllJobs']"
      :variables="{ newJobData: { title, coName, url } }"
    >
      <template slot-scope="{ mutate, loading, error }">
        <div>
          <form action>
            <div class="part">
              <label for>Job Title</label>
              <input class="job-input" type="text" v-model="title" placeholder="Job Title">
            </div>

            <div class="part">
              <label for>Company Name</label>
              <input class="job-input" type="text" v-model="coName" placeholder="Company Name">
            </div>

            <div>
              <label for>URL</label>
              <input class="job-input" type="text" v-model="url" placeholder="URL">
            </div>
          </form>
        </div>

        <button :disabled="loading" @click="mutate()" class="addJob">
          <router-link to="/jayjay/jobs" class="add-job-click">Add Job</router-link>
        </button>
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
      coName: "",
      url: ""
    };
  }
};
</script>

<style scoped>
.part {
  margin-bottom: 20px;
}
.add-job {
  background: rgba(221, 220, 220, 0.6);
  padding-top: 20px;
  padding-bottom: 50px;
  height: 100%;
  width: 40%;
  margin: 20px auto;
  margin-top: -20px;
  border-radius: 5px;
  box-shadow: 5px 5px 20px lightgray;
}
.addJob {
  padding: 0.3em 4.5em;
  color: white;
  background-color: #f897a9;
  border: none;
  border-radius: 2px;
  cursor: pointer;
  color: #2b2a2a;
}
.addJob:active {
  transform: translateY(1px);
}
.addJob:focus {
  outline-color: #fcbec9;
}
.addJob:hover {
  background-color: rgb(169, 171, 172);
  color: white;
}

.job-input {
  background: #abaaaa;
  width: 220px;
  font-size: 17px;
  text-align: left;
  height: 45px;
}
.job-input:focus {
  outline-color: #fcbec9;
}
.job-input:hover {
  background-color: rgb(228, 229, 230);
}
.add-job-click {
  color: #353535;
}
.add-job-click:hover {
  color: white;
  text-decoration: none;
  font-weight: 300;
}
</style>





