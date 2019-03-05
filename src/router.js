import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import LoginComponent from "./views/Login.vue";
import JobComponent from "./views/Jobs.vue";
import JobInfoComponent from "./views/JobInfo.vue";
import AddJobComponent from "./views/AddJob.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      redirect: {
        name: "login"
      }
    },
    {
      path: "/login",
      name: "login",
      component: LoginComponent
    },
    {
      path: "/jayjay",
      name: "home",
      component: Home
    },
    {
      path: "/jayjay/jobs",
      name: "jobs",
      component: JobComponent
    },
    {
      path: "/jayjay/jobs/:id",
      name: "job-info",
      component: JobInfoComponent
    },
    {
      path: "/add-job",
      name: "add-job",
      component: AddJobComponent
    }
  ]
});
