const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
  type Post {
    id: ID!
    title: String
    author: String
  }

  type Query {
    posts: [Post]
  }

  type Mutation {
    create_Post(id: ID!, title: String, author: String): [Post]
    update_Post(id: ID!, title: String, author: String): [Post]
    delete_Post(id: ID!): [Post]
  }
`;

let posts = [
  {
    id: 1,
    title: "The Awakening",
    author: "Kate Chopin",
  },
  {
    id: 2,
    title: "City of Glass",
    author: "Paul Auster",
  },
  {
    id: 3,
    title: "Animal Farm",
    author: "George Orwell",
  },
];

const resolvers = {
  Query: {
    posts: () => posts,
  },

  Mutation: {
    create_Post: (_, { id, title, author }) => {
      let newPost = { id, title, author };
      posts.push(newPost);
      return posts;
    },

    update_Post: (_, { id, title, author }) => {
      let editPost = posts.map((Post) => {
        if (Post.id == id) {
          Post.title = title;
          Post.author = author;
        }

        return Post;
      });

      return editPost;
    },

    delete_Post: (_, { id }) => {
      posts = posts.filter((post) => post.id != id);
      return posts;
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
  cache: "bounded",
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
