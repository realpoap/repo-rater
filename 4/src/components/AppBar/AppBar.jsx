import { View, StyleSheet, ScrollView, Pressable } from 'react-native';
import { useApolloClient } from '@apollo/client';
import AppBarTab from './AppBarTab';
import Constants from 'expo-constants';
import theme from '../../theme';
import Text from '../Text';
import AuthStorageContext from '../../contexts/AuthStorageContext';
import useMeToken from '../../hooks/useMeToken'
import { useContext } from 'react';


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
	const { me } = useMeToken();
	const authStorage = useContext(AuthStorageContext);
	const apolloClient = useApolloClient();

	console.log(authStorage);

	const handlePress = async (e) => {
		e.preventDefault();
		await authStorage.removeAccessToken();
		apolloClient.resetStore();
	}

	return (
		<View style={styles.nav}>
			<ScrollView horizontal contentContainerStyle={styles.scroll}>
				<AppBarTab
					text="Repositories"
					link="../"
				/>
				{
					!me && <AppBarTab
						text="Sign In"
						link="../signin"
					/>
				}
				{me &&
					<AppBarTab
						text="Create Review"
						link="../review"
					/>
				}
				{
					me &&
					<Pressable onPress={handlePress}>
						<Text
							fontWeight="bold"
							color="secondary"
							fontSize="title">Sign Out</Text>
					</Pressable>
				}


			</ScrollView>
		</View>
	);
};

export default AppBar;