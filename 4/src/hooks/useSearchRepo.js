import { useQuery } from "@apollo/client";
import { FILTER_REPO_BY } from "../graphql/queries";
import { useEffect } from "react";

const useSearchRepo = (debounced) => {
	console.log('debounced in useSearch', debounced);

	const { data, error, loading } = useQuery(FILTER_REPO_BY,
		{
			variables: { searchKeyword: debounced },
			onCompleted: (data) => console.log('completed:', data.repositories)
		}

	)

	useEffect(() => {
		if (error) {
			throw new Error(error)
		}
		if (loading) {
			console.log('loading...');
		}
	}, [])

	return { data, refetch: useQuery(FILTER_REPO_BY) }
}

export default useSearchRepo