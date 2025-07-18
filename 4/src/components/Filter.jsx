import { useContext, useState } from 'react';

import { Picker } from '@react-native-picker/picker';
import { StyleSheet, TextInput, View } from 'react-native';
import { FilterContext } from '../contexts/FilterContext';
import theme from '../theme';

const filterOptions = {
	latest: { orderBy: 'CREATED_AT', orderDirection: 'DESC' },
	highest: { orderBy: 'RATING_AVERAGE', orderDirection: 'DESC' },
	lowest: { orderBy: 'RATING_AVERAGE', orderDirection: 'ASC' },
};

const Filter = () => {
	const { searchFilter, setSearchFilter, filter, setFilter } =
		useContext(FilterContext);
	const [filterKey, setFilterKey] = useState('latest');

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
				selectedValue={filterKey}
				onValueChange={(itemValue) => {
					setFilterKey(itemValue);
					setFilter(filterOptions[itemValue]);
				}}>
				<Picker.Item
					label='Latest'
					value={'latest'}
				/>
				<Picker.Item
					label='Highest Rated'
					value={'highest'}
				/>
				<Picker.Item
					label='Lowest Rated'
					value={'lowest'}
				/>
			</Picker>
		</View>
	);
};

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
	},
});

export default Filter;
