import { gql } from "@apollo/client";

export const ADD_BOOKMARK = gql`
  mutation AddBookmark($title: String!, $url: String!, $description: String!) {
    addBookmark(title: $title, url: $url, description: $description) {
      title
    }
  }
`;

export const REMOVE_BOOKMARK = gql`
  mutation RemoveBookmark($id: ID!) {
    removeBookmark(id: $id) {
      title
    }
  }
`;

export const GET_BOOKMARKS = gql`
  query {
    bookmarks {
      id
      title
      url
      description
    }
  }
`;
