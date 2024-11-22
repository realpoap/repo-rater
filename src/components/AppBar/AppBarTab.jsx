import { Pressable } from 'react-native';
import Text from '../Text';

const AppBarTab = ({ text }) => {
	return (
		<Pressable>
			<Text
				fontWeight="bold"
				color="secondary"
				fontSize="title">{text}</Text>
		</Pressable>

	);
}

export default AppBarTab;
