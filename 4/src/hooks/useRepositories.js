import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = (variables) => {
	//console.log('variables', variables);

	const [repositories, setRepositories] = useState();
	const { data, error, loading, fetchMore, ...result } = useQuery(GET_REPOSITORIES, {
		fetchPolicy: 'cache-and-network',
		variables,
	})

	const handleFetchMore = () => {
		const pageInfo = data?.repositories.pageInfo;
		console.log('page?', pageInfo);

		const canFetchMore = !loading && pageInfo.hasNextPage;
		console.log('can Fetch More ?', canFetchMore);

		if (!canFetchMore) {
			return;
		}

		fetchMore({
			variables: {
				after: pageInfo.endCursor,
				...variables,
			},
		});
	};

	useEffect(() => {
		if (error) {
			throw new Error(error)
		}
		if (loading) {
			console.log('loading...');
		}
		if (data) {
			setRepositories(data.repositories)
		}
	}, [loading])

	return {
		repositories,
		refetch: useQuery(GET_REPOSITORIES),
		fetchMore: handleFetchMore,
		loading,
		...result
	};

};

export default useRepositories;