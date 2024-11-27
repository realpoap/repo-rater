import { useContext, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { CHECK_IF_USER } from "../graphql/queries";
import { MeContext } from "../contexts/MeContext";

const useMeToken = (include) => {
	const { setMe } = useContext(MeContext)

	const { data, error, loading } = useQuery(CHECK_IF_USER, {
		fetchPolicy: "cache-and-network",
		variables: { includeReviews: Boolean(include) },
		onCompleted: (data) => { console.log('me updated !'); setMe(data.me) }
	});

	useEffect(() => {
		if (loading) {
			console.log('loading user...');
		}
		if (error) {
			throw new Error(error)
		}
	}, [])

	return {
		data, refetch: useQuery(CHECK_IF_USER, {
			fetchPolicy: "cache-and-network",
			variables: { includeReviews: Boolean(include) },
			onCompleted: (data) => setMe(data.me)
		})
	}
}

export default useMeToken;