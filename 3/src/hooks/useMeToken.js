import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { CHECK_IF_USER } from "../graphql/queries";

const useMeToken = () => {
	const [me, setMe] = useState(null);
	const { data, loading, error } = useQuery(CHECK_IF_USER);

	useEffect(() => {
		if (error) {
			throw new Error(error)
		}
		if (loading) {
			console.log('checking user...');
		}
		if (data) {
			setMe(data.me);
		}
	}, [data])
	return { me }
}

export default useMeToken;