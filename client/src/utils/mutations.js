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

export const DELETE_POST = gql`
  mutation deletePost($_id: ID!) {
    deletePost(_id: $_id) {
      _id
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

export const UPDATE_POST = gql`
  mutation updatePost(
    $_id: ID!
    $title: String!
    $description: String
    $image: String
    $age: String
    $category: ID!
    $location: String!
  ) {
    updatePost(
      _id: $_id
      title: $title
      description: $description
      image: $image
      age: $age
      category: $category
      location: $location
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

export const NEW_COMMENT = gql`
  mutation addComment($postId: ID!, $userId: ID!, $comment: String!) {
    addComment(postId: $postId, userId: $userId, comment: $comment) {
      comments {
        _id
        comment
        created_at
      }
    }
  }
`;

export const DELETE_COMMENT = gql`
  mutation deleteComment($_id: ID!) {
    deleteComment(_id: $_id) {
      comments {
        _id
        comment
        created_at
      }
    }
  }
`;

export const UPDATE_COMMENT = gql`
  mutation updateComment($postId: ID!, $_id: ID!, $comment: String!) {
    updateComment(postId: $postId, _id: $_id, comment: $comment) {
      comments {
        _id
        comment
        created_at
      }
    }
  }
`;
