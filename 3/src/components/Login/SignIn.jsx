import { Pressable, View, TextInput, StyleSheet } from 'react-native';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Text from '../Text';
import theme from '../../theme';


const validationSchema = yup.object().shape({
	name: yup
		.string()
		.test('len', 'Username must be greater than 5', (val) => val.length > 4)
		.required('You must enter your username.'),
	password: yup
		.string()
		.test('len', 'Password must be greater than 8', (val) => val.length > 7)
		.required('You must enter a password.'),
})

const onSubmit = (values) => {
	console.log('function onSubmit:', values);
};

const SignInForm = () => {
	const formik = useFormik({
		initialValues: {
			name: '',
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
					(formik.errors.name && formik.touched.name) && styles.error
				]}
				placeholder='Username'
				value={formik.values.name}
				onChangeText={formik.handleChange('name')}
			/>
			{formik.touched.name && formik.errors.name && (
				<Text style={styles.error}>{formik.errors.name}</Text>
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