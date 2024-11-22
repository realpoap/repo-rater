import { View, StyleSheet } from 'react-native';
import AppBarTab from './AppBarTab';
import Constants from 'expo-constants';
import theme from '../../theme';

const styles = StyleSheet.create({
	nav: {
		paddingTop: Constants.statusBarHeight,
		backgroundColor: theme.colors.textPrimary,
		paddingBottom: 10,
		paddingLeft: 5,
	},
});

const AppBar = () => {
	return (
		<View style={styles.nav}>
			<AppBarTab
				text="Repositories"
			/>
		</View>
	);
};

export default AppBar;