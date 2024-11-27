import { useNavigate } from 'react-router-native';

import useSignIn from '../../hooks/useSignIn';
import SignInForm from './SignInForm';

const SignIn = () => {
	const [signIn] = useSignIn();
	const navigate = useNavigate();

	const onSubmit = async (values) => {
		try {
			const data = await signIn(values);
			if (data) {
				navigate('/');
			}
		} catch (error) {
			throw new Error(error)
		}
	};

	return (
		<SignInForm onSubmit={onSubmit} />
	);
};




export default SignIn;