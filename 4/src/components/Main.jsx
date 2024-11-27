import { Platform, StyleSheet, View } from 'react-native';
import { Route, Routes } from 'react-router';
import { StatusBar } from 'expo-status-bar';

import RepositoryList from './RepositoryList';
import AppBar from './AppBar/AppBar';
import SignIn from './Login/SignIn';
import SignUp from './SignUp';
import SingleRepo from './Repositories/SingleRepo';
import NewReview from './NewReview';
import { FilterContextProvider } from '../contexts/FilterContext';
import { MeContextProvider } from '../contexts/MeContext';
import ReviewList from './ReviewList';

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
	statusbar: {
		color: 'white',
	}
});

const Main = () => {
	return (
		<>
			<StatusBar style='light' />
			<View style={styles.container}>
				<MeContextProvider>
					<AppBar style={styles.nav} />

					<Routes >
						<Route path="/" element={
							<FilterContextProvider>
								<RepositoryList />
							</FilterContextProvider>}
						/>
						<Route path="/signin" element={<SignIn />}
						/>
						<Route path="/signup" element={<SignUp />}
						/>
						<Route path="/myreviews" element={<ReviewList />}
						/>
						<Route path="/review" element={<NewReview />}
						/>
						<Route path="/:id" element={<SingleRepo />}
						/>
						<Route path="*" element={
							<FilterContextProvider>
								<RepositoryList />
							</FilterContextProvider>}
						/>
					</Routes>
				</MeContextProvider>

			</View>
		</>
	);
};

export default Main;