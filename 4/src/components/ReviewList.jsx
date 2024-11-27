import { useContext, useEffect } from "react";
import { FlatList } from "react-native";
import useMeToken from "../hooks/useMeToken";
import { MeContext } from "../contexts/MeContext";
import ItemSeparator from "./ItemSeparator";
import Reviews from "./Repositories/Reviews";
import { useNavigate } from "react-router-native";

const ReviewList = () => {
	const navigate = useNavigate();
	const { me } = useContext(MeContext);
	useMeToken(true);

	useEffect(() => {
		if (!me) {
			navigate('/')
		}
	}, [])

	const reviews = me.reviews
		? me.reviews.edges.map((edge) => edge.node)
		: []

	return (
		<FlatList
			data={reviews}
			keyExtractor={review => review.id}
			ItemSeparatorComponent={<ItemSeparator />}
			renderItem={({ item }) => <Reviews review={item} />}
		/>
	);

}

export default ReviewList;
