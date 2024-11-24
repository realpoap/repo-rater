
import useRepositories from '../hooks/useRepositories';
import RepositoryListContainer from './Repositories/RepositoryListContainer';

const RepositoryList = () => {
	const { repositories } = useRepositories();

	return <RepositoryListContainer repositories={repositories} />;
};

export default RepositoryList;