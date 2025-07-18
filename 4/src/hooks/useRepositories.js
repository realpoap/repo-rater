import { useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = (filter) => {
	const [repositories, setRepositories] = useState();
	const { data, error, loading } = useQuery(GET_REPOSITORIES, {
		fetchPolicy: 'cache-and-network',
		variables: filter,
	})

	console.log('filter is', filter);

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

	return { repositories, refetch: useQuery(GET_REPOSITORIES) };

};

export default useRepositories;