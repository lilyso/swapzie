import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      token
      user {
        _id
        firstName
        lastName
        email
      }
    }
  }
`;

export const NEW_POST = gql`
  mutation newPost(
    $title: String!
    $description: String
    $image: String
    $age: String
    $category: ID!
    $location: String!
    $user: ID!
  ) {
    newPost(
      title: $title
      description: $description
      image: $image
      age: $age
      category: $category
      location: $location
      user: $user
    ) {
      _id
      title
      description
      image
      age
      category {
        _id
      }
      location
      user {
        _id
      }
    }
  }
`;
