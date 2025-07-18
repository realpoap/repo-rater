import { useContext, useEffect } from "react";
import { CHECK_IF_USER } from "../graphql/queries";
import { DELETE_REVIEW } from "../graphql/mutations";
import { MeContext } from "../contexts/MeContext";
import { useQuery, useMutation } from "@apollo/client";

const useMeToken = (include) => {
	const { setMe } = useContext(MeContext)

	const { data, error, loading } = useQuery(CHECK_IF_USER, {
		fetchPolicy: "cache-and-network",
		variables: { includeReviews: Boolean(include) },
		onCompleted: (data) => {
			console.log('USEMETOKEN - me updated !');
			setMe(data.me)
		}
	});

	const [mutate] = useMutation(DELETE_REVIEW, {
		awaitRefetchQueries: true,
		refetchQueries: [{
			query: CHECK_IF_USER,
			fetchPolicy: "cache-and-network",
			variables: { includeReviews: Boolean(include) },
			onCompleted: (data) => {
				console.log('USEMETOKEN - me updated !');
				setMe(data.me)
			}
		}],
		onCompleted: (data) => {
			console.log('deleted !');
			console.log('result:', data);
		},
	})

	useEffect(() => {
		if (loading) {
			console.log('loading user...');
		}
		if (error) {
			throw new Error(error)
		}
		if (data) {
			console.log('USEFFECT - me updated !');
			setMe(data)
		}
	}, [data])

	return {
		data, mutate
	}
}

export default useMeToken;