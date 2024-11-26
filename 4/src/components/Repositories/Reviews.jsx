import { View, StyleSheet } from "react-native";
import Text from "../Text";
import theme from "../../theme";

const Reviews = ({ review }) => {
	const { createdAt, rating, text, user } = review;


	return (
		<View style={styles.container}>
			<Text style={styles.rating}>{rating}</Text>
			<View style={styles.data}>
				<Text style={styles.username}>{user.username}</Text>
				<Text style={styles.date}>{createdAt.slice(0, 10)}</Text>
				<Text style={styles.text}>{text}</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		padding: 10,
		gap: 10,
	},
	data: {
		flex: 1,
		gap: 2,
	},
	rating: {
		width: 50,
		height: 50,
		fontWeight: theme.fontWeights.bold,
		fontSize: theme.fontSizes.subheading,
		color: theme.colors.primary,
		borderColor: theme.colors.primary,
		borderWidth: 3,
		borderRadius: 25,
		textAlign: 'center',
		textAlignVertical: 'center',
	},
	username: {
		fontWeight: theme.fontWeights.bold,
	},
	date: {
		color: theme.colors.textSecondary,
	},
	text: {
		marginTop: 2,
	},
})

export default Reviews;
