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
		searchKeyword: debouncedFilter,
	};
	console.log('variables are', variables);

	const { repositories } = useRepositories(variables);

	return <RepositoryListContainer repositories={repositories} />;
};

export default RepositoryList;
