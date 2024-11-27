import { Picker } from '@react-native-picker/picker';
import theme from '../theme';
import { TextInput } from 'react-native';
import { useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';

const Filter = ({ filter, setFilter }) => {
	const [searchFilter, setSearchFilter] = useState('');
	const [debouncedFilter] = useDebounce(searchFilter, 1000);
	console.log('debounced', debouncedFilter);

	useEffect(() => {

	}, [debouncedFilter])

	return (
		<>
			<TextInput
				placeholder='Search'
				inputMode='search'
				value={searchFilter}
				onChangeText={setSearchFilter}
			/>
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
		</>
	);
}

export default Filter;
