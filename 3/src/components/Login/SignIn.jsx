import { Pressable, View, TextInput, StyleSheet } from 'react-native';
import { useNavigate } from 'react-router-native';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Text from '../Text';
import useSignIn from '../../hooks/useSignIn';

// const validationSchema = yup.object().shape({
// 	username: yup
// 		.string()
// 		.test('len', 'Username must be greater than 5', (val) => val.length > 4)
// 		.required('You must enter your username.'),
// 	password: yup
// 		.string()
// 		.test('len', 'Password must be greater than 8', (val) => val.length > 7)
// 		.required('You must enter a password.'),
// })

// export const SignInForm = ({ onSubmit }) => {

// 	const formik = useFormik({
// 		initialValues: {
// 			username: '',
// 			password: '',
// 		},
// 		validationSchema,
// 		onSubmit,
// 	});

// 	return (
// 		<View style={styles.form}>
// 			<TextInput
// 				style={[
// 					styles.input,
// 					(formik.errors.username && formik.touched.username) && styles.error
// 				]}
// 				placeholder='Username'
// 				value={formik.values.username}
// 				onChangeText={formik.handleChange('username')}
// 			/>
// 			{formik.touched.username && formik.errors.username && (
// 				<Text style={styles.error}>{formik.errors.username}</Text>
// 			)}
// 			<TextInput
// 				style={[
// 					styles.input,
// 					(formik.errors.password && formik.touched.password) && styles.error
// 				]
// 				}
// 				secureTextEntry
// 				placeholder='Password'
// 				value={formik.values.password}
// 				onChangeText={formik.handleChange('password')}
// 			/>
// 			{formik.touched.password && formik.errors.password && (
// 				<Text style={styles.error}>{formik.errors.password}</Text>
// 			)}
// 			<Pressable
// 				onPress={formik.handleSubmit} >
// 				<Text style={styles.button}>Sign in</Text>
// 			</Pressable>
// 		</View>
// 	)
// };

export const SignIn = () => {
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




export default { SignIn, SignInForm };