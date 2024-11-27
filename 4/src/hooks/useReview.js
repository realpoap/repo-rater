import { useMutation } from "@apollo/client"
import { CREATE_REVIEW } from "../graphql/mutations"

const useReview = () => {
	const [mutate] = useMutation(CREATE_REVIEW)

	const createReview = async (values) => {
		try {
			console.log("Review submitted :", values);

			const { data } = await mutate({
				variables: {
					review: values,
				}
			})
			// console.log('data in useReview', data.createReview);
			return data.createReview

		} catch (error) {
			throw new Error(error)
		}
	}

	return [createReview]
}

export default useReview;