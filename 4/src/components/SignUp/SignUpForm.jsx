import { View, StyleSheet, Pressable, TextInput } from "react-native";
import Text from "../Text";
import { useFormik } from "formik";
import * as yup from 'yup';
import theme from "../../theme";

const validationSchema = yup.object().shape({
	username: yup
		.string()
		.test('len', 'Username must be longer than 3', value => (value.length > 2 && value.length < 31))
		.required(),
	password: yup
		.string()
		.test('len', 'Password must be at least 8 char. long', value => (value.length > 7 && value.length < 51))
		.required(),
	confirmPassword: yup
		.string()
		.oneOf([yup.ref('password'), null], "Does not match password")
		.required(),
})

const SignUpForm = ({ onSubmit }) => {

	const formik = useFormik({
		initialValues: {
			username: '',
			password: '',
			confirmPassword: '',
		},
		validationSchema,
		onSubmit
	})

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
				textContentType="password"
				secureTextEntry
				placeholder='Password'
				value={formik.values.password}
				onChangeText={formik.handleChange('password')}
			/>
			{formik.touched.password && formik.errors.password && (
				<Text style={styles.error}>{formik.errors.password}</Text>
			)}
			<TextInput
				style={[
					styles.input,
					(formik.errors.confirmPassword && formik.touched.confirmPassword) && styles.error
				]
				}
				secureTextEntry
				placeholder='Confirm Password'
				value={formik.values.confirmPassword}
				onChangeText={formik.handleChange('confirmPassword')}
			/>
			{formik.touched.confirmPassword && formik.errors.confirmPassword && (
				<Text style={styles.error}>{formik.errors.confirmPassword}</Text>
			)}
			<Pressable
				onPress={formik.handleSubmit} >
				<Text style={styles.button}>Sign in</Text>
			</Pressable>
		</View>
	)
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
		fontSize: theme.fontSizes.subheading,
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

export default SignUpForm;
