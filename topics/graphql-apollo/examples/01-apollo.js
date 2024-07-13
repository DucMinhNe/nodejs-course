const { ApolloServer } = require('@apollo/server');
const { startStandaloneServer } = require('@apollo/server/standalone');

const typeDefs = `#graphql
  type User { id: ID!  email: String!  posts: [Post!]! }
  type Post { id: ID!  title: String!  author: User! }
  type Query {
    user(id: ID!): User
    posts: [Post!]!
  }
`;

const resolvers = {
  Query: {
    user: (_, { id }) => db.users.findById(id),
    posts: () => db.posts.findAll(),
  },
  User: { posts: (u) => db.posts.findByAuthor(u.id) },
  Post: { author: (p) => db.users.findById(p.authorId) },
};

const server = new ApolloServer({ typeDefs, resolvers });
startStandaloneServer(server, { listen: { port: 4000 } });
