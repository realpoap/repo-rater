import { Pressable, View, TextInput, StyleSheet } from 'react-native';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Text from '../Text';
import theme from '../../theme';

import useSignIn from '../../hooks/useSignIn';

const validationSchema = yup.object().shape({
	username: yup
		.string()
		.test('len', 'Username must be greater than 5', (val) => val.length > 4)
		.required('You must enter your username.'),
	password: yup
		.string()
		.test('len', 'Password must be greater than 8', (val) => val.length > 7)
		.required('You must enter a password.'),
})



const SignInForm = ({ onSubmit }) => {

	const formik = useFormik({
		initialValues: {
			username: '',
			password: '',
		},
		validationSchema,
		onSubmit,
	});

	return (
		<View style={styles.form}>
			<TextInput
				style={[
					styles.input,
					(formik.errors.username && formik.touched.username) && styles.error
				]}
				placeholder='Username'
				value={formik.values.username}
				onChangeText={formik.handleChange('username')}
			/>
			{formik.touched.username && formik.errors.username && (
				<Text style={styles.error}>{formik.errors.username}</Text>
			)}
			<TextInput
				style={[
					styles.input,
					(formik.errors.password && formik.touched.password) && styles.error
				]
				}
				secureTextEntry
				placeholder='Password'
				value={formik.values.password}
				onChangeText={formik.handleChange('password')}
			/>
			{formik.touched.password && formik.errors.password && (
				<Text style={styles.error}>{formik.errors.password}</Text>
			)}
			<Pressable
				onPress={formik.handleSubmit} >
				<Text style={styles.button}>Sign in</Text>
			</Pressable>
		</View>
	)
};

const SignIn = () => {
	const [signIn, result] = useSignIn();

	const onSubmit = async (values) => {
		console.log(values);
		const { username, password } = values;

		try {
			await signIn(username, password);
			console.log('token', result.data.authenticate.accessToken);

		} catch (error) {
			console.log('error', error);

			throw new Error(error)
		}
	};

	return (
		<SignInForm onSubmit={onSubmit} />
	);
};


const styles = StyleSheet.create({
	form: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'flex-start',
		margin: 20,
		width: 300,
		alignSelf: 'center',
		borderRadius: 5,
		gap: 5,
		alignContent: 'center',
	},
	input: {
		height: 50,
		borderRadius: 5,
		color: theme.colors.textSecondary,
		borderColor: theme.colors.light,
		borderWidth: 2,
		verticalAlign: 'middle',
		paddingLeft: 10,
	},
	button: {
		color: theme.colors.secondary,
		fontWeight: theme.fontWeights.bold,
		backgroundColor: theme.colors.primary,
		height: 40,
		borderRadius: 5,
		textAlign: 'center',
		verticalAlign: 'middle',
	},
	error: {
		color: '#d73a4a',
		borderColor: '#d73a4a',

	}
})

export default SignIn;