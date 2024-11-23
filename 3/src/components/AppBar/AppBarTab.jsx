import { Link } from 'react-router-native';
import Text from '../Text';

const AppBarTab = ({ text, link }) => {
	return (
		<Link to={link} >
			<Text
				fontWeight="bold"
				color="secondary"
				fontSize="title">{text}</Text>

		</Link >

	);
}

export default AppBarTab;
