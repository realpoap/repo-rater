import { gql } from "@apollo/client";
import { REPOSITORY_FIELDS, REVIEW_FIELDS } from "./fragments";

export const GET_REPOSITORIES = gql`
${REPOSITORY_FIELDS}
query Repositories($orderBy: AllRepositoriesOrderBy, $orderDirection: OrderDirection, $searchKeyword: String){
	repositories (orderBy: $orderBy, orderDirection: $orderDirection, searchKeyword: $searchKeyword){
		edges {
			node {
				...RepositoryFields
			}
		}
	}
}
`;

export const CHECK_IF_USER = gql`
${REVIEW_FIELDS}
query getCurrentUser($includeReviews: Boolean! = false){
  me {
    id
    username
		reviews @include(if: $includeReviews) {
        edges {
          node {
            ...ReviewFields
						user {
								id
								username
						}
          }
        }
      }
  }
}`

export const GET_SINGLE_REPO = gql`
${REVIEW_FIELDS}
${REPOSITORY_FIELDS}
query Repository($id: ID!){
	repository(id: $id) {
				...RepositoryFields
				reviews {
					edges {
						node {
							...ReviewFields
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