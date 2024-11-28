import { View, StyleSheet, Pressable, Linking } from "react-native";
import Text from "../Text";
import theme from "../../theme";
import { useLazyQuery } from "@apollo/client";
import { GET_REPO_URL } from '../../graphql/queries';
import { useEffect } from "react";

const Reviews = ({ review, isOwner, handleDelete }) => {
	const { createdAt, rating, text, user, id } = review;
	const repoId = `${id.split('.')[1]}.${id.split('.')[2]}`

	const [getUrl, { data }] = useLazyQuery(GET_REPO_URL, {
		fetchPolicy: 'cache-first',
		variables: { repositoryId: repoId },
		onCompleted: (data) => {
			console.log('got url !', data.repository);
		}
	});

	useEffect(() => {
		getUrl()
	}, [])

	const handleUrlRedirect = async () => {
		console.log('View repo pressed !');

		await getUrl()
		const url = data ? data.repository.url : '';
		if (url == '') {
			console.log('url is empty');
		} else {
			console.log(url);

			Linking.openURL(url)
		}
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
			{isOwner &&
				<View style={styles.row}>
					<Pressable onPress={handleUrlRedirect}><Text style={styles.button}>View repository</Text></Pressable>

					<Pressable onPress={() => handleDelete(id)}><Text style={[styles.button, { backgroundColor: '#d73a4a' }]}>Delete review</Text></Pressable>
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
