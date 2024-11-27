import { Picker } from '@react-native-picker/picker';
import theme from '../theme';
import { View, StyleSheet, TextInput } from 'react-native';
import { useContext } from 'react';
import { FilterContext } from '../contexts/FilterContext';

const Filter = () => {
	const { searchFilter, setSearchFilter, filter, setFilter } = useContext(FilterContext)

	return (
		<View style={styles.container}>
			<TextInput
				style={styles.search}
				placeholder='Search'
				inputMode='search'
				value={searchFilter}
				onChangeText={setSearchFilter}
			/>
			<Picker
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
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#e1e4e8',
		padding: 10,
	},
	search: {
		height: 50,
		width: '100vw',
		borderRadius: 5,
		color: theme.colors.textSecondary,
		borderColor: theme.colors.light,
		borderWidth: 2,
		verticalAlign: 'middle',
		paddingLeft: 10,
		backgroundColor: theme.colors.secondary,
	}
})

export default Filter;
