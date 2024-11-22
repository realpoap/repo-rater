import { StyleSheet, View } from 'react-native';
import Stat from './Stat';

const StatBar = ({ stars, forks, reviews, rating }) => {

	const valueByK = (value) => {
		if (value >= 1000) {
			const number = (value / 1000).toFixed(1);
			return `${number}k`
		} else {
			return value
		}

	}
	return (
		<View style={styles.container}>
			<Stat text='Stars' value={valueByK(stars)} />
			<Stat text='Forks' value={valueByK(forks)} />
			<Stat text='Reviews' value={valueByK(reviews)} />
			<Stat text='Rating' value={valueByK(rating)} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-between',
		// borderBlockColor: 'red',
		// borderWidth: 1,
		// borderStyle: 'solid',
	}
})

export default StatBar;
