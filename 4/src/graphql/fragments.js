import { gql } from '@apollo/client';
export const REPOSITORY_FIELDS = gql`
	fragment RepositoryFields on Repository {
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
`;