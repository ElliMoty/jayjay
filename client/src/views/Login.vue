<template>
  <div id="login">
    <div class="wrapper">
      <div class="container">
        <!-- Login Form start here -->
        <div class="form-elements">
          <h1>Welcome</h1>

          <div class="logo">
            <img src="../assets/logo.png" alt="jayjay logo">
          </div>

          <form id="form">
            <input
              type="text"
              name="username"
              v-model="input.username"
              placeholder="Username"
              autofocus="true"
              required
            >
            <input
              type="password"
              name="password"
              v-model="input.password"
              placeholder="Password"
              required
            >
            <button id="login-button" type="button" v-on:click="login()">Login</button>
          </form>
        </div>
        <!-- Login Form end here -->
      </div>
      <!-- Bubble elements start here (10 squares) -->
      <ul class="bg-bubbles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <!-- Bubble elements end here -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    login() {
      if (this.input.username != "" && this.input.password != "") {
        if (
          this.input.username == this.$parent.mockAccount.username &&
          this.input.password == this.$parent.mockAccount.password
        ) {
          this.$emit("authenticated", true);
          localStorage.authenticated = true;
          this.$router.replace({ name: "home" });
        } else {
          alert("The username and/or password is incorrect");
        }
      } else {
        alert("A username and password must be present");
      }
    }
  }
};
</script>

<style scoped>
  @import "../styles/login.css";
</style>