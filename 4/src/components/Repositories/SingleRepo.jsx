import RepositoryItem from './RepositoryItem'
import Text from '../Text';
import { FlatList } from 'react-native';
import UseSingleRepository from '../../hooks/useSingleRepository';
import ItemSeparator from '../ItemSeparator';
import Reviews from './Reviews';

const SingleRepo = () => {

	const { data, loading } = UseSingleRepository();
	if (loading) {
		return <Text>Loading data...</Text>
	}

	if (data !== undefined) {
		const repository = data.repository;
		console.log(repository);

		const reviews =
			repository.reviews
				? repository.reviews.edges.map((edge) => edge.node)
				: [];

		return (
			<FlatList
				data={reviews}
				keyExtractor={review => review.id}
				ItemSeparatorComponent={<ItemSeparator />}
				renderItem={({ item }) => <Reviews review={item} />}
				ListHeaderComponent={() => <RepositoryItem
					item={repository}
				/>}
			/>
		);
	}
}


export default SingleRepo;
