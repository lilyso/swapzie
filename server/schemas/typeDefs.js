const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    posts: [String]
  }

  type Category {
    _id: ID
    name: String
  }

  type Post {
    _id: ID
    title: String
    description: String
    image: String
    category: ID
    user: ID
    comments: [String]
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    categories: [Category]
    posts(category: ID, name: String): [Post]
    post(_id: ID!): Post
    user: User
  }

  type Mutation {
    addUser(
      firstName: String!
      lastName: String!
      email: String!
      password: String!
    ): Auth
    updateUser(
      firstName: String
      lastName: String
      email: String
      password: String
    ): User
    updatePost(_id: ID!, quantity: Int!): Post
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
