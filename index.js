require("dotenv/config");
const { ApolloServer, gql } = require("apollo-server");
const fs = require("fs");
const path = require("path");
const resolvers = require("./resolvers/index");
const mongoose = require("mongoose");
const PostDataSource = require("./dataSource/post.datasource");
const CommentDataSource = require("./dataSource/comment.datasource");

mongoose.connect(process.env.MONGO_CONNECTION_STRING);

const schema = fs.readFileSync(path.join(__dirname, "/schema.graphql"), "utf8");
const typeDefs = gql(schema);

const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
  cache: "bounded",
  dataSources: () => {
    return {
      post: new PostDataSource(),
      comment: new CommentDataSource()
    }
  },
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});