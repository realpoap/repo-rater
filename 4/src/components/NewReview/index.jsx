import { useNavigate } from "react-router-native";
import useReview from "../../hooks/useReview";
import NewReviewForm from "./NewReviewForm";

const NewReview = () => {
	const [createReview] = useReview();
	const navigate = useNavigate();


	const onSubmit = async (values) => {
		const parsedValues = {
			...values,
			rating: Number(values.rating)
		}

		try {
			const result = await createReview(parsedValues)
			if (result) {
				console.log(result.repositoryId);
				navigate(`/${result.repositoryId}`)
			}

		} catch (error) {
			throw new Error(error)
		}
	}


	return (
		<NewReviewForm onSubmit={onSubmit} />
	);
}

export default NewReview;
