import { StyleSheet, View } from 'react-native';

import RepositoryList from './RepositoryList';
import AppBar from './AppBar/AppBar';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexGrow: 1,
	},
});

const Main = () => {
	return (
		<View style={styles.container}>
			<AppBar style={styles.nav} />
			<View >
				<RepositoryList />
			</View>
		</View>
	);
};

export default Main;