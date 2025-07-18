import {
	Image,
	Linking,
	Platform,
	Pressable,
	StyleSheet,
	View,
} from 'react-native';
import theme from '../../theme';
import Text from '../Text';
import StatBar from './StatBar';

const styles = StyleSheet.create({
	containerRepo: {
		flexDirection: 'column',
		boxSizing: 'border-box',
		paddingLeft: 10,
		paddingRight: 10,
		fontFamily: Platform.select({
			android: 'Roboto',
			ios: 'Arial',
			default: 'Sans-Serif',
		}),
		marginBottom: 10,
	},
	containerInfo: {
		flexDirection: 'row',
	},
	containerStat: {
		flexDirection: 'row',
	},
	item: {
		flex: 1,
		flexGrow: 1,
		flexDirection: 'column',
		alignItems: 'baseline',
		gap: 2,
		margin: 10,
		// borderBlockColor: 'green',
		// borderWidth: 1,
		// borderStyle: 'solid',
	},
	avatar: {
		width: 50,
		height: 50,
		borderRadius: 5,
		marginTop: 15,
	},
	title: {
		fontWeight: theme.fontWeights.bold,
		color: theme.colors.textPrimary,
	},
	desc: {
		flexWrap: 'wrap',
		color: theme.colors.textSecondary,
		// borderBlockColor: 'purple',
		// borderWidth: 1,
		// borderStyle: 'solid',
	},
	chip: {
		flexBasis: 'min-content',
		backgroundColor: Platform.select({
			android: 'blue',
			ios: 'red',
			default: 'green',
		}),
		borderRadius: 5,
		color: theme.colors.secondary,
		width: 'min-content',
		maxWidth: 'fit-content',
		textAlign: 'center',
		padding: 3,
		paddingLeft: 8,
		paddingRight: 8,
		fontSize: theme.fontSizes.chip,
		textAlignVertical: 'center',
	},
	button: {
		color: theme.colors.secondary,
		backgroundColor: theme.colors.primary,
		textAlign: 'center',
		marginTop: 10,
		height: 40,
		padding: 5,
		width: '100%',
		borderRadius: 10,
		fontWeight: theme.fontWeights.bold,
		textAlignVertical: 'center',
	},
});

const RepositoryItem = ({ item, toGithub }) => {
	const {
		fullName,
		description,
		language,
		stargazersCount,
		forksCount,
		reviewCount,
		ratingAverage,
		ownerAvatarUrl,
		url,
	} = item;
	const handlePress = (e) => {
		e.preventDefault();
		//console.log(url);
		Linking.openURL(url);
	};

	return (
		<View
			testID='repositoryItem'
			style={styles.containerRepo}>
			<View style={styles.containerInfo}>
				<Image
					style={styles.avatar}
					height={50}
					width={50}
					resizeMethod='resize'
					resizeMode='center'
					source={{ uri: ownerAvatarUrl }}
				/>
				<View style={styles.item}>
					<Text style={styles.title}>{fullName}</Text>
					<Text style={styles.desc}>{description}</Text>
					<Text style={styles.chip}>{language}</Text>
				</View>
			</View>
			<StatBar
				style={styles.containerStat}
				stars={stargazersCount}
				forks={forksCount}
				reviews={reviewCount}
				rating={ratingAverage}
			/>
			{toGithub && (
				<Pressable onPress={handlePress}>
					<Text style={styles.button}>Open in Github</Text>
				</Pressable>
			)}
		</View>
	);
};

export default RepositoryItem;
