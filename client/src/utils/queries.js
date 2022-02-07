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
          _id
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

export const QUERY_POST_BY_ID = gql`
  query post($_id: ID) {
    post(_id: $_id) {
      _id
      title
      description
      image
      age
      category {
        name
      }
      user {
        _id
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
        _id
        postId
        userId
        comment
        created_at
      }
      created_at
    }
  }
`;
