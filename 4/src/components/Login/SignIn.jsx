import { useNavigate } from 'react-router-native';

import useSignIn from '../../hooks/useSignIn';
import SignInForm from './SignInForm';

const SignIn = () => {
	const [signIn] = useSignIn();
	const navigate = useNavigate();

	const onSubmit = async (values) => {
		console.log(values);
		const { username, password } = values;

		try {
			const data = await signIn(username, password);
			if (data) {
				navigate('/');
			}
		} catch (error) {
			console.log('error', error);
			throw new Error(error)
		}
	};

	return (
		<SignInForm onSubmit={onSubmit} />
	);
};




export default SignIn;