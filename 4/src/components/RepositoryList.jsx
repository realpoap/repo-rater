
import { useContext } from 'react'
import useRepositories from '../hooks/useRepositories';
import RepositoryListContainer from './Repositories/RepositoryListContainer';
import { FilterContext } from '../contexts/FilterContext.js'

const RepositoryList = () => {
	const { filter } = useContext(FilterContext)
	const { repositories } = useRepositories(filter);

	return <RepositoryListContainer repositories={repositories} />;
};

export default RepositoryList;