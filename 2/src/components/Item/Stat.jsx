import { StyleSheet, View } from 'react-native';
import Text from '../Text';
import theme from '../../theme';


const Stat = ({ text, value }) => {

	return (

		<View>
			<Text style={styles.value}>{value}</Text>
			<Text style={styles.title}>{text}</Text>
		</View>

	);
}

const styles = StyleSheet.create({
	title: {
		fontWeight: theme.fontWeights.bold,
		color: theme.colors.textSecondary,
		textAlign: 'center',
	},
	value: {
		fontWeight: theme.fontWeights.bold,
		color: theme.colors.textPrimary,
		textAlign: 'center',
	}
})

export default Stat;
