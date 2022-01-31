import { gql } from "@apollo/client";

export const QUERY_POST_BY_ID = gql`
  query post($_id: ID)
    post (_id:$_id){
      _id
      title
      description
      category{
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
  {
    categories {
      _id
      name
    }
  }
`;

export const QUERY_POSTS = gql`
  {
    posts {
      _id
      title
      description
      image
      quantity
      category {
        name
      }
      user {
        firstName
        lastName
      }
      dateCreated
      comments
    }
  }
`;
