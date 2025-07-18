import { FlatList } from 'react-native';
import UseSingleRepository from '../../hooks/useSingleRepository';
import ItemSeparator from '../ItemSeparator';
import Text from '../Text';
import RepositoryItem from './RepositoryItem';
import Reviews from './Reviews';

const SingleRepo = () => {
	const { repository, loading, fetchMore } = UseSingleRepository();
	if (loading) {
		return <Text>Loading data...</Text>;
	}

	if (repository) {
		const reviews = repository.reviews
			? repository.reviews.edges.map((edge) => edge.node)
			: [];

		const onEndReach = () => {
			console.log('You have reached the end of the list');
			fetchMore();
		};

		return (
			<FlatList
				data={reviews}
				keyExtractor={(review) => review.id}
				ItemSeparatorComponent={<ItemSeparator />}
				renderItem={({ item }) => <Reviews review={item} />}
				ListHeaderComponent={() => (
					<>
						<RepositoryItem
							item={repository}
							toGithub={true}
						/>
						<ItemSeparator />
					</>
				)}
				onEndReached={onEndReach}
				onEndReachedThreshold={0.5}
			/>
		);
	}
};

export default SingleRepo;
