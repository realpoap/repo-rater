import { useEffect, useState } from "react";
import { useParams } from "react-router-native";
import { useQuery } from "@apollo/client";
import { GET_SINGLE_REPO } from "../graphql/queries";

const UseSingleRepository = () => {
	const { id } = useParams();

	const [repo, setRepo] = useState();
	const { data, error, loading } = useQuery(GET_SINGLE_REPO,
		{ variables: { id: id } }
	)

	useEffect(() => {
		console.log('id in hook', id)

		if (error) {
			throw new Error(error);
		}
		if (loading) {
			console.log('loading repo...');
		}
		if (data) {
			console.log('data', data.repository);
			setRepo(data.repository);
		}
	}, [loading])

	return {
		data, refetch: useQuery(GET_SINGLE_REPO,
			{ variables: { id: id } }
		)
	}
}

export default UseSingleRepository;
