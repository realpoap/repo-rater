
import { useContext } from 'react';
import useRepositories from '../hooks/useRepositories';
import RepositoryListContainer from './Repositories/RepositoryListContainer';
import { FilterContext } from '../contexts/FilterContext.js';
import useMeToken from '../hooks/useMeToken.js';

const RepositoryList = () => {
	const { filter, debouncedFilter } = useContext(FilterContext)
	useMeToken();

	const variables = {
		...filter,
		searchKeyword: debouncedFilter
	}

	const { repositories } = useRepositories(variables);

	return <RepositoryListContainer repositories={repositories} />;
};

export default RepositoryList;