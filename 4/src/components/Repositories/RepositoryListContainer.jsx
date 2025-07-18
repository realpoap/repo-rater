import { FlatList } from 'react-native';
import { Link } from 'react-router-native';
import Filter from '../Filter';
import ItemSeparator from '../ItemSeparator';
import RepositoryItem from './RepositoryItem';

const RepositoryListContainer = ({ repositories, onEndReach }) => {
	const repositoryNodes = repositories
		? repositories.edges.map((edge) => edge.node)
		: [];

	const renderHeader = () => <Filter />;

	return (
		<FlatList
			style={{ flexWrap: 'nowrap' }}
			data={repositoryNodes}
			ItemSeparatorComponent={<ItemSeparator />}
			ListHeaderComponent={renderHeader}
			keyExtractor={(item) => item.id}
			renderItem={({ item }) => (
				<Link to={`/${item.id}`}>
					<RepositoryItem item={item} />
				</Link>
			)}
			onEndReached={onEndReach}
			onEndReachedThreshold={0.5}
		/>
	);
};

export default RepositoryListContainer;
