import { View, StyleSheet, Pressable, Linking, Alert } from "react-native";
import Text from "../Text";
import theme from "../../theme";
import { useMutation, useQuery } from "@apollo/client";
import { DELETE_REVIEW } from "../../graphql/mutations";
import { GET_REPO_URL } from '../../graphql/queries';

const Reviews = ({ review, refetch, username }) => {
	const { createdAt, rating, text, user, id } = review;
	const [mutate] = useMutation(DELETE_REVIEW, {
		onCompleted: () => console.log('deleted !'),
	})
	const repoId = `${id.split('.')[1]}.${id.split('.')[2]}`
	console.log(repoId);

	const { data } = useQuery(GET_REPO_URL, {
		variables: { repositoryId: repoId }
	});
	const url = data.repository.url;

	const handlePress = () => {
		Alert.alert('Delete review', 'Are you sure you want to delete this review ?', [
			{
				text: 'Cancel',
				onPress: () => console.log('Cancel Pressed'),
				style: 'cancel',
			},
			{
				text: 'OK', onPress: async () => {
					console.log('OK Pressed');
					await mutate({ variables: { deleteReviewId: id } });
					refetch();
				}
			},
		]);

	}

	return (
		<View>

			<View style={styles.row}>
				<Text style={styles.rating}>{rating}</Text>
				<View style={styles.data}>
					<Text style={styles.username}>{user.username}</Text>
					<Text style={styles.date}>{createdAt.slice(0, 10)}</Text>
					<Text style={styles.text}>{text}</Text>
				</View>
			</View>
			{(user.username === username) &&
				<View style={styles.row}>
					<Pressable onPress={() => Linking.openURL(url)}><Text style={styles.button}>View repository</Text></Pressable>

					<Pressable onPress={handlePress}><Text style={[styles.button, { backgroundColor: '#d73a4a' }]}>Delete review</Text></Pressable>
				</View>}
		</View >
	);
}

const styles = StyleSheet.create({

	row: {
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
	button: {
		fontSize: theme.fontSizes.subheading,
		color: theme.colors.secondary,
		fontWeight: theme.fontWeights.bold,
		backgroundColor: theme.colors.primary,
		height: 40,
		width: 160,
		borderRadius: 5,
		textAlign: 'center',
		verticalAlign: 'middle',
	},

})

export default Reviews;
