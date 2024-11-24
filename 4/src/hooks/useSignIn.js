import { useApolloClient, useMutation } from "@apollo/client"
import { AUTHENTICATE } from "../graphql/mutations"
import { useContext } from 'react';
import AuthStorageContext from '../contexts/AuthStorageContext';

const useSignIn = () => {
	const authStorage = useContext(AuthStorageContext);
	const apolloClient = useApolloClient();
	const [authenticate, result] = useMutation(AUTHENTICATE);

	console.log(authStorage);


	const signIn = async (username, password) => {
		const { data } = await authenticate({
			variables: {
				credentials: {
					username: username,
					password: password
				}
			}
		})
		console.log('from authenticate:onCompleted :', data);
		await authStorage.setAccessToken(data.authenticate.accessToken);
		apolloClient.resetStore();
		return data
	}

	return [signIn, result]

}

export default useSignIn