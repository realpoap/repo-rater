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
		if (data && !loading) {
			setRepositories(data.repositories)
		}
	}, [])

	return { repositories };

};

export default useRepositories;