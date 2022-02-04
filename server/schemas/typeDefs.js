const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    posts: [Post]
    claimed: [Post]
    comments: [Post]
  }

  type Category {
    _id: ID
    name: String
  }

  input CategoryInput {
    _id: ID
    name: String
  }

  type Post {
    _id: ID
    title: String
    description: String
    image: String
    age: String
    category: Category
    location: String
    user: User
    claimedBy: ID
    comments: [Comment]
    created_at: String
  }

  type Comment {
    post: ID
    user: ID
    comment: String
    created_at: String
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
      firstName: String!
      lastName: String!
      email: String!
      password: String!
    ): User
    deletePost(_id: ID!): Post
    updatePost(
      title: String!
      description: String
      image: String
      age: String
      category: ID
      location: String!
    ): Post
    login(email: String!, password: String!): Auth
    newPost(
      title: String!
      description: String
      image: String
      age: String
      category: ID!
      location: String!
      user: ID!
    ): Post
    addComment(user: ID!, comment: String!): Comment
    updateComment(user: ID!, comment: String!): Comment
  }
`;

module.exports = typeDefs;
