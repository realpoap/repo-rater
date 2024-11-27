import { useMutation } from "@apollo/client"
import { CREATE_USER } from "../graphql/mutations"
import { useNavigate } from "react-router-native";
import useSignIn from "./useSignIn";

const useSignUp = () => {
	const [signIn] = useSignIn();
	const navigate = useNavigate();

	const [mutate, { data, loading, error }] = useMutation(CREATE_USER,
		{
			onCompleted: async (data) => {
				console.log('sign up completed:', data);
			}
		});

	if (loading) return 'Submitting...';
	if (error) return `Submission error! ${error.message}`;

	const signUp = async (values) => {
		try {
			await mutate({ variables: { user: values } })
			try {
				await signIn(values);
				navigate('/')
			} catch (error) {
				throw new Error(error)
			}
		} catch (error) {
			throw new Error(error)
		}
	}

	return [signUp, data]

}

export default useSignUp