import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';


const useRepositories = () => {
	const [repositories, setRepositories] = useState();
	const { data, error, loading } = useQuery(GET_REPOSITORIES)

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