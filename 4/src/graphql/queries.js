import { gql } from "@apollo/client";

export const GET_REPOSITORIES = gql`
query {
	repositories {
		edges {
			node {
				id
				fullName
				forksCount
				description
				language
				ownerAvatarUrl
				ratingAverage
				reviewCount
				stargazersCount
			}
		}
	}
}
`;

export const CHECK_IF_USER = gql`
query {
  me {
    id
    username
  }
}`