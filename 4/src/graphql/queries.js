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
				url
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

export const GET_SINGLE_REPO = gql`
query ($id: ID!){
	repository(id: $id) {
				id
				fullName
				forksCount
				description
				language
				ownerAvatarUrl
				ratingAverage
				reviewCount
				stargazersCount
				url
				reviews {
					edges {
						node {
							id
							text
							rating
							createdAt
							user {
								id
								username
			}
		}
	}
	}
	}
}
`