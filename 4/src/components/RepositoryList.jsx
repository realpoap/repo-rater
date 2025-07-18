import { useContext } from 'react';
import { FilterContext } from '../contexts/FilterContext.js';
import useMeToken from '../hooks/useMeToken.js';
import useRepositories from '../hooks/useRepositories';
import RepositoryListContainer from './Repositories/RepositoryListContainer';

const RepositoryList = () => {
	const { filter, debouncedFilter } = useContext(FilterContext);
	useMeToken();

	const variables = {
		...filter,
		first: 4,
		searchKeyword: debouncedFilter,
	};

	const { repositories, fetchMore } = useRepositories(variables);
	if (!repositories) {
		return <p>Loading...</p>;
	}

	const onEndReach = () => {
		console.log('You have reached the end of the list');
		fetchMore();
	};

	return (
		<RepositoryListContainer
			repositories={repositories}
			onEndReach={onEndReach}
		/>
	);
};

export default RepositoryList;
