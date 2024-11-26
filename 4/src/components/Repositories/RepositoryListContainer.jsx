import { FlatList, View, StyleSheet } from 'react-native';
import RepositoryItem from './RepositoryItem';
import { Link } from 'react-router-native';

const styles = StyleSheet.create({
	separator: {
		height: 10,
		backgroundColor: '#e1e4e8',
	},
	container: {
		flex: 1,
	},
});

const ItemSeparator = () => <View style={styles.separator} />;


export const RepositoryListContainer = ({ repositories }) => {
	const repositoryNodes = repositories
		? repositories.edges.map((edge) => edge.node)
		: [];

	return (
		<FlatList
			style={{ flexWrap: 'nowrap' }}
			data={repositoryNodes}
			ItemSeparatorComponent={ItemSeparator}
			keyExtractor={item => item.id}
			renderItem={({ item }) =>
				<Link to={`/${item.id}`}>
					<RepositoryItem
						id={item.id}
						avatar={item.ownerAvatarUrl}
						name={item.fullName}
						desc={item.description}
						language={item.language}
						stars={item.stargazersCount}
						forks={item.forksCount}
						reviews={item.reviewCount}
						rating={item.ratingAverage}

					/>
				</Link>
			}
		/>

	);
};

export default RepositoryListContainer;