const { ApolloServer, gql } = require("apollo-server-express");
const express = require('express');

const jobs = [
  {
    id: "1",
    title: "Junior Web Developer",
    url:
      "https://www.seek.com.au/job/38834722?searchrequesttoken=d66049bc-f758-4826-bed0-035eece99e77&type=standard",
    company: {
      name: "RIB"
    }
  },
  {
    id: "2",
    title: "Graduate Software Engineer",
    url:
      "https://www.seek.com.au/job/38849783?searchrequesttoken=d66049bc-f758-4826-bed0-035eece99e77&type=standard",
    company: {
      name: "Robert Walters"
    }
  }
];

const users = {
  tina: "chicken",
  john: "chicken"
};

const comments = [
  {
    id: "1",
    text:
      "Web Development Immersive Course in General Assembly helped me a lot to achieve all basic I need to star my new journey in dev world.",
    username: "Joe Bloggs",
    date: "2014-12-4"
  },
  {
    id: "2",
    text:
      "My first experience in ticTac company was great. They helped me and gave me enough time to grow up in this field.",
    username: "Anne Sharon",
    date: "2015-8-20"
  }
];

// Schema
// type definitions
const typeDefs = gql`
  type Comment {
    id: ID
    text: String
    username: String
    date: String
  }

  type Company {
    name: String
  }

  type Job {
    id: ID
    title: String
    url: String
    company: Company
  }

  type Query {
    jobs: [Job]
    comments: [Comment]
  }

  input UserInfo {
    username: String
    password: String
  }

  input AddJobInput {
    title: String
    coName: String
    url: String
  }

  input AddCommentInput {
    text: String
    username: String
  }

  type Mutation {
    addJob(input: AddJobInput): String
    login(input: UserInfo): String
    addComment(input: AddCommentInput): String
  }
`;

// DataFetchers = resolvers
const resolvers = {
  Query: {
    jobs: () => jobs,
    comments: () => comments
  },

  Mutation: {
    // adding job
    addJob(root, { input }) {
      jobs.push({
        id: Math.floor(Math.random() * 100),
        title: input.title,
        company: {
          name: input.coName
        },
        url: input.url
      });
      return "ok";
    },
    // login
    login(root, { input }) {
      if (users[input.username] == input.password) {
        return "successful!";
      }

      return "something is wrong!";
    },
    // adding comments
    addComment(root, { input }) {
      comments.push({
        id: Math.floor(Math.random() * 100),
        text: input.text,
        username: input.username,
        date: new Date().toISOString().slice(0,10)
      })
    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers
  // // Authentication
  // context: ({ req }) => {
  //   // get the user token from the headers
  //   const token = req.headers.authorization || "";

  //   // try to retrieve a user with the token
  //   const user = getUser(token);

  //   // optionally block the user
  //   // we could also check user roles/permissions here
  //   if (!user) throw new AuthorizationError("you must be logged in");

  //   // add the user to the context
  //   return { user };
  // }
});

const app = express();
server.applyMiddleware({app});
app.use(express.static('../client/dist'));
app.use('/jayjay/',express.static('../client/dist'));
app.use('/jayjay/*',express.static('../client/dist'));
app.use('/login/',express.static('../client/dist'));

app.listen(process.env.PORT || 8080);