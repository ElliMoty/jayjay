<template>
  <div class="home">
    <!-- App logo -->
    <img src="../assets/logo.png" alt="JayJay logo" />
    <!-- home page content -->
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