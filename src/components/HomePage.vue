<template>
  <div class="intro">
    <h1>{{ msg }}</h1>

    <h3 class="quote">
      The future belongs to those who believe in the beauty of their dreams.
      <br />
      <span id="author">-Roosevelt</span>
    </h3>
     <!-- App Guidance -->
    <h4>
      We are here to make our dreams come true by helping each other. <br />This
      app tries to help you to find your first job with more confidence and
      knowledge. <br />List of available junior jobs
      <br />
      <a>Jobs</a>
      <br />The high rated companies which are good for juniors
      <br />
      <a>High Rated Companies</a>
      <br />If you have any question and need more help,
      <br />
      <a>FAQ</a>
      <br />If you can not find your desired answer chat with your experienced
      friends in
      <br />
      <a>Chat Room</a>
      <br />For more information and help
      <br />
      <a>Contact</a> with us.
    </h4>

  </div>
</template>

<script>
export default {
  name: "HomePage",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3,
p {
  margin: 40px 0 0;
}

#author {
  font-size: 14px;
}
.quote {
  color: #a3a3a3;
}
a {
  color: #002898;
}
</style>
