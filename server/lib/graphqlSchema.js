const { gql } = require('apollo-server-express');

// Construct a schema using GraphQL schema language
const typeDefs = gql`
  type User {
    _id: String,
    name: String,
    userName: String,
    email: String,
  },
  type Post {
    _id: String,
    title: String,
    body: String,
    genre: String,
    author: User,
  },
  type Query {
    users: [User],
    getUser(id: ID): User!,
    posts: [Post],
    getPost(id: ID): Post!,
  },
  input UserInput {
    name: String,
    userName: String,
    email: String
  },
  input PostInput {
    title: String,
    body: String,
    genre: String,
    author: ID
  },
  type Mutation {
    addUser(user: UserInput): User,
    deleteUser(id: ID): User,
    updateUser(id: ID, user: UserInput): User,
    addPost(post: PostInput): Post,
    deletePost(id: ID): Post,
    updatePost(id: ID, post: PostInput): Post
  },
`;

module.exports = typeDefs;