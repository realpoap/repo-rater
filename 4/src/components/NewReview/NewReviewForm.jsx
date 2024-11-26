import { TextInput, View, StyleSheet, Pressable } from "react-native";
import { useFormik } from 'formik';
import * as yup from 'yup';
import Text from "../Text";
import theme from "../../theme";

const validationSchema = yup.object().shape({
	ownerName: yup
		.string()
		.required(),
	repositoryName: yup
		.string()
		.required(),
	rating: yup
		.number()
		.test('val', 'ratings must be comprised between 0 and 100', val => (val >= 0 && val < 101))
		.required(),
	text: yup
		.string()
		.optional(),
})

const NewReviewForm = ({ onSubmit }) => {

	const formik = useFormik({
		initialValues: {
			ownerName: '',
			repositoryName: '',
			rating: '',
			text: '',
		},
		validationSchema,
		onSubmit
	})
	return (
		<View style={styles.form}>
			<TextInput
				style={styles.input}
				placeholder="Repository owner"
				value={formik.values.ownerName}
				onChangeText={formik.handleChange('ownerName')}
			/>
			{formik.touched.ownerName && formik.errors.ownerName && (
				<Text style={styles.error}>{formik.errors.ownerName}</Text>
			)}
			<TextInput
				style={styles.input}
				placeholder="Repository Name"
				value={formik.values.repositoryName}
				onChangeText={formik.handleChange('repositoryName')}
			/>
			{formik.touched.repositoryName && formik.errors.repositoryName && (
				<Text style={styles.error}>{formik.errors.repositoryName}</Text>
			)}
			<TextInput
				style={styles.input}
				keyboardType='numeric'
				placeholder="Rating"
				maxLength={3}
				value={formik.values.rating}
				onChangeText={formik.handleChange('rating')}
			/>
			{formik.touched.rating && formik.errors.rating && (
				<Text style={styles.error}>{formik.errors.rating}</Text>
			)}
			<TextInput
				style={styles.input}
				placeholder="Review"
				value={formik.values.text}
				onChangeText={formik.handleChange('text')}
				multiline
			/>
			{formik.touched.text && formik.errors.text && (
				<Text style={styles.error}>{formik.errors.text}</Text>
			)}
			<Pressable onPress={formik.handleSubmit}>
				<Text style={styles.button}>Review</Text>
			</Pressable>
		</View>
	);
}

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

export default NewReviewForm;
