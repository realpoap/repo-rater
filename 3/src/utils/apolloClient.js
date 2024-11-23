import { ApolloClient, InMemoryCache } from '@apollo/client';
import Constants from 'expo-constants';

const clientUri = Constants.expoConfig.extra.clientUri

const createApolloClient = () => {
	return new ApolloClient({
		uri: clientUri,
		cache: new InMemoryCache(),
	});
};

export default createApolloClient;