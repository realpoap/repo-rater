import { View, StyleSheet, ScrollView, Pressable } from 'react-native';
import { useApolloClient } from '@apollo/client';
import AppBarTab from './AppBarTab';
import Constants from 'expo-constants';
import theme from '../../theme';
import Text from '../Text';
import AuthStorageContext from '../../contexts/AuthStorageContext';
import { useContext } from 'react';
import { MeContext } from '../../contexts/MeContext';
import { useNavigate } from 'react-router-native';

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
	const navigate = useNavigate()
	const authStorage = useContext(AuthStorageContext);
	const apolloClient = useApolloClient();

	const { me } = useContext(MeContext);

	const handlePress = async (e) => {
		e.preventDefault();
		console.log('signout pressed');

		await authStorage.removeAccessToken();
		apolloClient.clearStore().then(() => {
			apolloClient.resetStore();
		}
		)
		navigate('/')
	}

	return (
		<View style={styles.nav}>
			<ScrollView horizontal contentContainerStyle={styles.scroll}>
				<AppBarTab
					text="Repositories"
					link="../"
				/>
				{!me &&
					<>
						<AppBarTab
							text="Sign In"
							link="../signin"
						/>
						<AppBarTab
							text="Sign Up"
							link="../signup"
						/>
					</>
				}
				{me &&
					<>
						<AppBarTab
							text="My Reviews"
							link="../myreviews"
						/>
						<AppBarTab
							text="Create Review"
							link="../review"
						/>
						<Pressable onPress={handlePress}>
							<Text
								fontWeight="bold"
								color="secondary"
								fontSize="title">Sign Out</Text>
						</Pressable>
					</>
				}

			</ScrollView>
		</View>
	);
};

export default AppBar;