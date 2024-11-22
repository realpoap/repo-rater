import { View, StyleSheet, ScrollView } from 'react-native';
import AppBarTab from './AppBarTab';
import Constants from 'expo-constants';
import theme from '../../theme';

const styles = StyleSheet.create({
	nav: {
		paddingTop: Constants.statusBarHeight,
		backgroundColor: theme.colors.textPrimary,
		paddingBottom: 10,
		paddingLeft: 5,
		flexDirection: 'row',
		justifyContent: 'space-evenly',
	},
	scroll: {
		gap: 30,
	}
});

const AppBar = () => {
	return (
		<View style={styles.nav}>
			<ScrollView horizontal contentContainerStyle={styles.scroll}>
				<AppBarTab
					text="Repositories"
					link="/"
				/>
				<AppBarTab
					text="Sign In"
					link="./signin"
				/>
			</ScrollView>
		</View>
	);
};

export default AppBar;