import { gql } from "@apollo/client";
import { REPOSITORY_FIELDS, REVIEW_FIELDS } from "./fragments";

export const GET_REPOSITORIES = gql`
${REPOSITORY_FIELDS}
query Repositories($orderBy: AllRepositoriesOrderBy, $orderDirection: OrderDirection, $searchKeyword: String, $first: Int, $after: String) {
	repositories (orderBy: $orderBy, orderDirection: $orderDirection, searchKeyword: $searchKeyword, first: $first, after: $after) {
		edges {
			node {
				...RepositoryFields
			}
			cursor
		}
		pageInfo {
      endCursor
      startCursor
      hasNextPage
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

export const GET_REPO_URL = gql`
query Repository($repositoryId: ID!) {
  repository(id: $repositoryId) {
    url  
  }
}`

export const GET_SINGLE_REPO = gql`
${REVIEW_FIELDS}
${REPOSITORY_FIELDS}
query Repository($id: ID!, $first: Int, $after: String) {
	repository(id: $id) {
				...RepositoryFields
				reviews (first: $first, after: $after){
					edges {
						node {
							...ReviewFields
							user {
								id
								username
							}							
						}
						cursor
					}
					pageInfo {
      			endCursor
     			 	startCursor
      			hasNextPage
    			}
				}
		
	}
}
`