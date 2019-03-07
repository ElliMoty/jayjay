<template id="homePage">
  <div id="app">
    <div id="nav" v-if="authenticated">
      <router-link to="/jayjay">Home</router-link> |
      <router-link to="/jayjay/jobs">Jobs</router-link> |
      <router-link to="/jayjay/add-job">Add Job</router-link> |
      <router-link to="/jayjay/Comments">Comments</router-link> |
      <router-link to="/jayjay/faq">FAQ</router-link> |
      <router-link to="/jayjay/contact">Contact</router-link> |
      <router-link to="/login" v-on:click.native="logout()" replace>Logout</router-link>
      <img src="./assets/logo-nav.png" alt="JayJay logo" id="logo"/>
    </div>

    <router-view @authenticated="setAuthenticated"/>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      authenticated: false,
      mockAccount: {
        username: "elli",
        password: "chicken"
      }
    };
  },
  mounted() {
    // There is a bug here!
    if (!localStorage.authenticated) {
      this.$router.replace({ name: "login" });
    } else {
      this.authenticated = true;
    }
  },
  methods: {
    setAuthenticated(status) {
      localStorage.authenticated = status;
      this.authenticated = status;
    },
    logout() {
      localStorage.authenticated = false;
      this.authenticated = false;
    }
  }
};
</script>

<!-- general style for whole pages! -->
<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  margin: auto;
  font-size: 17px;
}
#nav {
  padding: 30px;
  background: #514F4F;
  padding-right: 10px;
  margin-bottom: 100px;
 
}

#nav a {
  font-weight: bold;
  color: white;
  font-size: 16px;
}

#nav a.router-link-exact-active {
  color: #FCBEC9;
}

h1 {
  padding: 0;
  margin-top: 0;
}

#logo {
  margin-left: 750px;
}
</style>
