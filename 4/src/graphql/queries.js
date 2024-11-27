import { gql } from "@apollo/client";
import { REPOSITORY_FIELDS } from "./fragments";

export const GET_REPOSITORIES = gql`
${REPOSITORY_FIELDS}
query Repositories($orderBy: AllRepositoriesOrderBy, $orderDirection: OrderDirection){
	repositories (orderBy: $orderBy, orderDirection: $orderDirection){
		edges {
			node {
				...RepositoryFields
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

export const FILTER_REPO_BY = gql`
${REPOSITORY_FIELDS}
query Repositories($searchKeyword: String) {
  repositories(searchKeyword: $searchKeyword) {
    edges {
      node {
        ...RepositoryFields
      }
    }
  }
}
`

export const GET_SINGLE_REPO = gql`
${REPOSITORY_FIELDS}
query Repository($id: ID!){
	repository(id: $id) {
				...RepositoryFields
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