<template>
  <div class="home">
    <img src="../assets/logo.png" alt="JayJay logo" />
    <HomePage msg="Welcome to Junior Job Board!" />
  </div>
</template>

<script>
import HomePage from "@/components/HomePage.vue";

export default {
  name: "home",
  components: {
    HomePage
  }
};
</script>