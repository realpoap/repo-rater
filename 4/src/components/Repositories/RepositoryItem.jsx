import { Platform, View, Image, StyleSheet } from 'react-native'
import Text from '../Text';
import theme from '../../theme';
import StatBar from './StatBar';

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		boxSizing: 'border-box',
	},
	item: {
		flex: 1,
		flexGrow: 1,
		flexDirection: 'column',
		alignItems: 'baseline',
		gap: 2,
		margin: 10,
		fontFamily: Platform.select({
			android: 'Roboto',
			ios: 'Arial',
			default: 'Sans-Serif',
		}),
		// borderBlockColor: 'green',
		// borderWidth: 1,
		// borderStyle: 'solid',
	},
	avatar: {
		width: 50,
		height: 50,
		borderRadius: 5,
		margin: 10,
	},
	title: {
		fontWeight: theme.fontWeights.bold,
		color: theme.colors.textPrimary,
	},
	desc: {
		flex: 1,
		width: '100%',
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
	}
});

const RepositoryItem = ({ name, desc, language, stars, forks, reviews, rating, avatar }) => {
	return (
		<View testID="repositoryItem" style={styles.container}>
			<Image style={styles.avatar}
				height={50}
				width={50}
				resizeMethod='resize'
				resizeMode='center'
				src={avatar}
			/>
			<View style={styles.item}>
				<Text style={styles.title}>{name}</Text>
				<Text style={styles.desc}>{desc}</Text>
				<Text style={styles.chip}>{language}</Text>
				<StatBar
					stars={stars}
					forks={forks}
					reviews={reviews}
					rating={rating}
				/>
			</View>
		</View>
	)
}

export default RepositoryItem