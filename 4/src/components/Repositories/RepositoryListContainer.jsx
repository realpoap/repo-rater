import { FlatList } from 'react-native';
import RepositoryItem from './RepositoryItem';
import { Link } from 'react-router-native';
import ItemSeparator from '../ItemSeparator';

export const RepositoryListContainer = ({ repositories }) => {
	const repositoryNodes = repositories
		? repositories.edges.map((edge) => edge.node)
		: [];
	return (
		<FlatList
			style={{ flexWrap: 'nowrap' }}
			data={repositoryNodes}
			ItemSeparatorComponent={<ItemSeparator />}
			keyExtractor={item => item.id}
			renderItem={({ item }) =>
				<Link to={`/${item.id}`}>
					<RepositoryItem
						item={item}
					/>
				</Link>
			}
		/>

	);
};

export default RepositoryListContainer;