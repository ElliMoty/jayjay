import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import LoginComponent from "./views/Login.vue";
import JobComponent from "./views/Jobs.vue";
import JobInfoComponent from "./views/JobInfo.vue";
import AddJobComponent from "./views/AddJob.vue";
import CommentsComponent from "./views/Comments.vue";
import FaqComponent from "./views/Faq.vue";
import ContactComponent from "./views/Contact.vue";


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
      path: "/jayjay/add-job",
      name: "add-job",
      component: AddJobComponent
    },
    {
      path: "/jayjay/comments",
      name: "comment-page",
      component: CommentsComponent
    }, 
    {
      path: "/jayjay/faq",
      name: "faq",
      component: FaqComponent
    },
    {
      path: "/jayjay/contact",
      name: "contact",
      component: ContactComponent
    }
  ]
});
