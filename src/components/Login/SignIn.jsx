import { Pressable, View, TextInput, StyleSheet } from 'react-native';
import { useFormik } from 'formik';
import Text from '../Text';
import theme from '../../theme';

const onSubmit = (values) => {
	console.log('function onSubmit:', values);
};

const SignInForm = () => {
	const formik = useFormik({
		initialValues: {
			name: '',
			password: '',
		},
		onSubmit: (values) => { console.log(values) }
	});

	return (
		<View style={styles.form}>
			<TextInput
				style={styles.input}
				placeholder='Username'
				value={formik.values.name}
				onChangeText={formik.handleChange('name')}
			/>
			<TextInput
				style={styles.input}
				secureTextEntry
				placeholder='Password'
				value={formik.values.password}
				onChangeText={formik.handleChange('password')}
			/>
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
	}
})

export default SignIn;