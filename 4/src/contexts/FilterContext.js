import { createContext, useState } from "react";
import { useDebounce } from "use-debounce";

export const FilterContext = createContext()

export const FilterContextProvider = ({ children }) => {
	const [filter, setFilter] = useState({
		"orderBy": "CREATED_AT",
		"orderDirection": "DESC"
	});

	const [searchFilter, setSearchFilter,] = useState('')
	const [debouncedFilter] = useDebounce(searchFilter, 500);

	return (
		<FilterContext.Provider
			value={{
				filter,
				setFilter,
				searchFilter,
				setSearchFilter,
				debouncedFilter
			}}
		>
			{children}
		</FilterContext.Provider>
	);
};