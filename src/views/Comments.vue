<template>
  <div class="comment-page">
    <ApolloQuery :query="require('../graphql/Comments.gql')">
      <template slot-scope="{ result: { loading, error, data } }">
        <section class="comments">
          <!-- Loading -->
          <div v-if="loading" class="loading apollo">Loading...</div>

          <!-- Error -->
          <div v-else-if="error" class="error apollo">An error occured</div>

          <!-- Result -->
          <div v-else-if="data" class="result apollo">
            <article class="comment">
              <div class="comment-body" v-for="comment in data.comments" v-bind:key="comment.id">
                <div class="text">
                  <p>{{comment.text}}</p>
                </div>
                <p class="attribution">
                  by
                  <a class="username-link" href="#non">{{comment.username}}</a>
                  at {{comment.date}}
                </p>
              </div>
            </article>
          </div>

          <!-- No result -->
          <div v-else class="no-result apollo">No result :(</div>
        </section>
      </template>
    </ApolloQuery>

    <ApolloMutation
      :mutation="require('../graphql/AddComment.gql')"
      :refetchQueries="['GetAllComments']"
      :variables="{ newComment: { text, username } }"
    >
      <template slot-scope="{ mutate, loading, error }">
        <div>
          <form action>
            <textarea class="comment-text" type="text" v-model="text"></textarea>
            
            <input class="name-input" type="text" v-model="username" placeholder="Your Name:">
          </form>
        </div>

        <button class="add-button" :disabled="loading" @click="mutate()">Add</button>
        <p v-if="error">An error occured: {{ error }}</p>
      </template>
    </ApolloMutation>
  </div>
</template>

<script>
export default {
  name: "comment-page",
  data() {
    return {
      text: "",
      username: ""
    };
  }
};
</script>


<style scoped>
article,
aside,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}

a {
  color: #6d84b4;
  text-decoration: none;
}

body {
  width: 100%;
  height: 100%;
  margin: 20px auto;
  font: 16px/1.4 Arial, sans-serif;
  background: #3b5998;
}

section {
  background: rgba(221, 220, 220, 0.9);
  padding-right: 85px;
  padding-top: 20px;
  padding-bottom: 20px;
  height: 100%;
  width: 60%;
  margin: auto;
  margin-top: -35px;
  border-radius: 5px;
  box-shadow: 5px 5px 20px gray;
}

.comment {
  overflow: hidden;
  padding: 0 0 1em;
  border-bottom: 1px solid #ddd;
  margin: 0 0 1em;
  margin-left: 40px;
  *zoom: 1;
  width: 100%;
}

.comment-body {
  overflow: hidden;
}

.comment .text {
  padding: 10px;
  border: 1px solid #e5e5e5;
  border-radius: 5px;
  background: #fff;
  margin-left: 82px;
}

.comment .text p:last-child {
  margin: 0;
}

.comment .attribution {
  margin: 0.5em 0 1.5em 6em;
  font-size: 14px;
  color: #666;
  text-align: left;
}

/* Decoration */

.comments,
.comment {
  position: relative;
}

.comments:before,
.comment:before,
.comment .text:before {
  content: "";
  position: absolute;
  top: 0;
  left: 65px;
}

.comments:before {
  width: 3px;
  left: 105px;
  bottom: 0px;
  background: rgba(0, 0, 0, 0.1);
}

.comment:before {
  width: 15px;
  height: 15px;
  border: 3px solid #fff;
  border-radius: 100px;
  margin: 16px 0 0 -6px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2), inset 0 1px 1px rgba(0, 0, 0, 0.1);
  background: #ccc;
}

.comment:hover {
  /*  cursor: url('../images/FB_CUR.cur');  See the result on http://lab.web-gate.fr/timeline/ */
  cursor: cell; /* This line is for the cursor */
}

.comment:hover:before {
  background: #f3758c;
}

.comment .text:before {
  top: 18px;
  left: 78px;
  width: 9px;
  height: 9px;
  border-width: 0 0 1px 1px;
  border-style: solid;
  border-color: #e5e5e5;
  background: #fff;
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  -o-transform: rotate(45deg);
}

.comment-text {
  width: 60%;
  height: 100px;
}

.username-link {
  color: #f3758c;
}

.username-link:hover {
  color: #fa385b;
  text-decoration: none;
}

.name-input {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  outline: 0;
  border: 1px solid rgba(255, 255, 255, 0.4);
  background-color: rgb(199, 199, 199);
  width: 60%;
  border-radius: 3px;
  padding: 10px 15px;
  margin: 0 auto 10px auto;
  display: block;
  text-align: center;
  font-size: 18px;
  color: white;
  -webkit-transition-duration: 0.25s;
  transition-duration: 0.25s;
  font-weight: 300;
}

.name-input:hover {
  background-color: rgba(255, 255, 255, 0.4);
  border: 1px solid rgba(65, 65, 65, 0.4);
}
.name-input:focus {
  background-color: white;
  width: 300px;
  color: #f3758c;
}
.add-button {
  width: 30%;
  height: 35px;
  background: #f3758c;
  border-radius: 10px;
}
</style>
