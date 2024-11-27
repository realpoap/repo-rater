import { Picker } from '@react-native-picker/picker';
import theme from '../theme';

const Filter = ({ filter, setFilter }) => {

	return (
		<Picker style={{ backgroundColor: theme.colors.textSecondary, color: theme.colors.secondary }}
			prompt='Filter by :'
			selectedValue={filter}
			onValueChange={(itemValue) =>
				setFilter(itemValue)
			}>
			<Picker.Item label="Latest" value={{
				"orderBy": "CREATED_AT",
				"orderDirection": "DESC"
			}} />
			<Picker.Item label="Highest Rated" value={{
				"orderBy": "RATING_AVERAGE",
				"orderDirection": "DESC"
			}} />
			<Picker.Item label="Lowest Rated" value={{
				"orderBy": "RATING_AVERAGE",
				"orderDirection": "ASC"
			}} />
		</Picker>
	);
}

export default Filter;
