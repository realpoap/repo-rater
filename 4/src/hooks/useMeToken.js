import { useContext, useEffect } from "react";
import { CHECK_IF_USER } from "../graphql/queries";
import { MeContext } from "../contexts/MeContext";
import { useQuery } from "@apollo/client";

const useMeToken = (include) => {
	const { setMe } = useContext(MeContext)

	const { data, error, loading, refetch } = useQuery(CHECK_IF_USER, {
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
		data, refetch
	}
}

export default useMeToken;