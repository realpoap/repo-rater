
import { useContext } from 'react';
import useRepositories from '../hooks/useRepositories';
import RepositoryListContainer from './Repositories/RepositoryListContainer';
import { FilterContext } from '../contexts/FilterContext.js';
import useMeToken from '../hooks/useMeToken.js';

const RepositoryList = () => {
	const { filter, debouncedFilter } = useContext(FilterContext)
	useMeToken();

	const variables = {
		variables: {
			...filter,
			first: 5,
			searchKeyword: debouncedFilter
		}
	}

	const { repositories, fetchMore } = useRepositories(variables);
	const onEndReach = () => {
		console.log('You have reached the end of the list');
		fetchMore();
	};

	return <RepositoryListContainer
		repositories={repositories}
		onEndReach={onEndReach}
	/>;
};

export default RepositoryList;