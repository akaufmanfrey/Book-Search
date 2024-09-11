import { gql } from "@apollo/client";

export const GET_ME = gql`

query me {
  me {
    _id
    bookCount
    username
    email
    savedBooks {
      authors
      bookId
      description
      image
      link
      title
    }
  }
}
`;