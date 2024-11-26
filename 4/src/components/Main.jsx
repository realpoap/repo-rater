import { Platform, StyleSheet, View } from 'react-native';
import { Route, Routes } from 'react-router';

import RepositoryList from './RepositoryList';
import AppBar from './AppBar/AppBar';
import SignIn from './Login/SignIn';
import SingleRepo from './Repositories/SingleRepo';
import NewReview from './NewReview';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexGrow: 1,
		fontFamily: Platform.select({
			android: 'Roboto',
			ios: 'Arial',
			default: 'Sans-Serif',
		}),
	},
});

const Main = () => {
	return (
		<View style={styles.container}>
			<AppBar style={styles.nav} />
			<Routes >
				<Route path="/" element={<RepositoryList />}
				/>
				<Route path="/signin" element={<SignIn />}
				/>
				<Route path="/review" element={<NewReview />}
				/>
				<Route path="/:id" element={<SingleRepo />}
				/>
				<Route path="*" element={<RepositoryList />}
				/>
			</Routes>

		</View>
	);
};

export default Main;