<template>
  <div class="intro">
    
    <svg viewBox="0 0 960 60">
      <symbol id="s-text">
        <text text-anchor="middle" x="50%" y="90%">{{ msg }}</text>
      </symbol>

      <g class="g-ants">
        <use xlink:href="#s-text" class="text-copy"></use>
        <use xlink:href="#s-text" class="text-copy"></use>
        <use xlink:href="#s-text" class="text-copy"></use>
        <use xlink:href="#s-text" class="text-copy"></use>
        <use xlink:href="#s-text" class="text-copy"></use>
      </g>
    </svg>

    <h3 class="quote">The future belongs to those who believe in the beauty of their dreams.
      <br>
      <span id="author">-Roosevelt</span>
    </h3>
    <!-- App Guidance -->
    <h4>
      We are here to make our dreams come true by helping each other.
      <br>This
      app tries to help you to find your first job with more confidence and
      knowledge.
      <br>You can find list of available junior jobs in
      <br>
      <router-link id="tabs" v-bind:to="'/jayjay/jobs'">** Jobs **</router-link>
      <br>You can add more jobs which you or your company offer in,
      <br>
      <router-link id="tabs" v-bind:to="'/jayjay/add-job'" >** Add Job **</router-link>
      <br>If you have questions please check,
      <br>
      <router-link id="tabs" v-bind:to="'/jayjay/faq'">** FAQ **</router-link>
      <br>You can read about other dev's experience or post your comment in,
      <br>
      <router-link id="tabs" v-bind:to="'/jayjay/comments'">** Comments **</router-link>
      <br>For more information and help,
      <br>
      <router-link id="tabs" v-bind:to="'/jayjay/contact'">** Contact **</router-link>
      <br>with us.
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

<style scoped>
@import "../styles/home.css";

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

#tabs {
  text-decoration: none;
  color: #fa5976;
}
</style>
