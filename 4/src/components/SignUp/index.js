
import useSignUp from "../../hooks/useSignUp";
import SignUpForm from "./SignUpForm";

const SignUp = () => {
	const [signUp] = useSignUp();

	const onSubmit = async (values) => {
		console.log('on submit from SignUpForm:', values);
		const cleanedValues = {
			username: values.username,
			password: values.password,
		}
		try {
			await signUp(cleanedValues);
		} catch (error) {
			throw new Error(error)
		}
	}

	return (
		<SignUpForm onSubmit={onSubmit} />
	)
}

export default SignUp;