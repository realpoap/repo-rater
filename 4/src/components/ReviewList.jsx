import { FlatList, Alert } from "react-native";
import useMeToken from "../hooks/useMeToken";
import ItemSeparator from "./ItemSeparator";
import Reviews from "./Repositories/Reviews";
import Text from "./Text";
import { useEffect } from "react";
import { useContext } from "react";
import { MeContext } from "../contexts/MeContext";

const ReviewList = () => {
	console.log('calling query with reviews...');
	const { me } = useContext(MeContext)
	const { data, mutate } = useMeToken(true);

	useEffect(() => {

	}, [])

	if (!data) {
		return (
			<Text>Loading data</Text>
		)
	}

	console.log('me:', data.me);
	console.log('reviews:', data.me.reviews);

	const handleDelete = (id) => {
		Alert.alert('Delete review', 'Are you sure you want to delete this review ?', [
			{
				text: 'Cancel',
				onPress: () => console.log('Cancel Pressed'),
				style: 'cancel',
			},
			{
				text: 'OK', onPress: async () => {
					console.log('OK Delete Pressed');
					await mutate({ variables: { deleteReviewId: id } });
				}
			},
		]);

	}

	const reviews = data.me.reviews
		? data.me.reviews.edges.map((edge) => edge.node)
		: []

	if (reviews.length === 0) {
		return (
			<Text>No reviews yet...</Text>
		)
	}

	return (
		<FlatList
			data={reviews}
			keyExtractor={review => review.id}
			ItemSeparatorComponent={<ItemSeparator />}
			renderItem={({ item }) => <Reviews review={item} handleDelete={handleDelete} isOwner={true} />}
		/>
	);

}

export default ReviewList;
