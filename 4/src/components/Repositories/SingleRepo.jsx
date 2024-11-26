import { useParams } from 'react-router-native';
import { useQuery } from '@apollo/client';
import RepositoryItem from './RepositoryItem'
import { GET_SINGLE_REPO } from '../../graphql/queries';
import Text from '../Text';
import { StyleSheet } from 'react-native';

const SingleRepo = () => {
	const { id } = useParams()
	console.log(id);

	const { data, error, loading } = useQuery(GET_SINGLE_REPO,
		{ variables: { id: id } }
	)

	if (error) {
		throw new Error(error)
	}
	if (loading) {
		return <Text>loading repo...</Text>
	}

	if (data) {
		const item = data.repository;
		return (
			<RepositoryItem
				id={item.id}
				avatar={item.ownerAvatarUrl}
				name={item.fullName}
				desc={item.description}
				language={item.language}
				stars={item.stargazersCount}
				forks={item.forksCount}
				reviews={item.reviewCount}
				rating={item.ratingAverage}
				url={item.url}
			/>
		);
	}
}


export default SingleRepo;
