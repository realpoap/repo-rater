import { useQuery } from "@apollo/client";
import { useParams } from "react-router-native";
import { GET_SINGLE_REPO } from "../graphql/queries";

const UseSingleRepository = () => {
	const { id } = useParams();

	const variables = { id, first: 3 };

	const { data, loading, fetchMore, result } = useQuery(GET_SINGLE_REPO,
		{
			variables,
			fetchPolicy: 'cache-and-network'
		}
	)

	const handleFetchMore = () => {
		const canFetchMore = !loading && data?.repository.reviews.pageInfo.hasNextPage;
		if (!canFetchMore) return;
		fetchMore({
			variables: {
				after: data.repository.reviews.pageInfo.endCursor,
				...variables,
			}
		})
	}

	return {
		repository: data?.repository, fetchMore: handleFetchMore, loading, ...result,
	}
}

export default UseSingleRepository;
