import { FlatList, View, StyleSheet } from 'react-native';
import RepositoryItem from './Item/RepositoryItem';
import useRepositories from '../hooks/useRepositories';

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

const RepositoryList = () => {
	const { repositories } = useRepositories();

	const repositoryNodes = repositories
		? repositories.edges.map(edge => edge.node)
		: [];

	return (
		<FlatList
			style={{ flexWrap: 'nowrap' }}
			data={repositoryNodes}
			ItemSeparatorComponent={ItemSeparator}
			keyExtractor={item => item.id}
			renderItem={({ item }) =>
				<RepositoryItem
					avatar={item.ownerAvatarUrl}
					name={item.fullName}
					desc={item.description}
					language={item.language}

					stars={item.stargazersCount}
					forks={item.forksCount}
					reviews={item.reviewCount}
					rating={item.ratingAverage}
				/>
			}
		/>

	);
};

export default RepositoryList;