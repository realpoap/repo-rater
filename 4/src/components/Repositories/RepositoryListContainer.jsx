import { useContext } from 'react';
import { FlatList } from 'react-native';
import { Link } from 'react-router-native';
import RepositoryItem from './RepositoryItem';
import ItemSeparator from '../ItemSeparator';
import Filter from '../Filter';
import { FilterContext } from '../../contexts/FilterContext';

export const RepositoryListContainer = ({ repositories }) => {
	const { filter, setFilter } = useContext(FilterContext)
	const repositoryNodes = repositories
		? repositories.edges.map((edge) => edge.node)
		: [];

	return (
		<FlatList
			style={{ flexWrap: 'nowrap' }}
			data={repositoryNodes}
			ItemSeparatorComponent={<ItemSeparator />}
			ListHeaderComponent={() =>
				<Filter
					filter={filter}
					setFilter={setFilter}
				/>}
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