import { gql } from "@apollo/client";

export const QUERY_USER_BY_ID = gql`
  query user {
    user {
      firstName
      lastName
      posts {
        _id
        title
        description
        image
        age
        category {
          name
        }
        location
        claimedBy
        comments {
          comment
        }
        created_at
      }
    }
  }
`;

export const USER_POST_BY_ID = gql`
  query post($_id: ID) {
    post(_id: $_id) {
      _id
      title
      description
      category {
        name
      }
      user {
        firstName
        lastName
      }
    }
  }
`;

export const QUERY_CATEGORIES = gql`
  query categories {
    categories {
      _id
      name
    }
  }
`;

export const QUERY_POSTS = gql`
  query allPosts {
    posts {
      _id
      title
      description
      image
      age
      location
      category {
        name
      }
      user {
        firstName
        lastName
      }
      comments {
        user
        comment
      }
    }
  }
`;
