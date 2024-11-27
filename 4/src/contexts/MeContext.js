import { useState, createContext } from "react";

export const MeContext = createContext();

export const MeContextProvider = ({ children }) => {
	const [me, setMe] = useState(null);
	return (
		<MeContext.Provider value={{ me, setMe }}>
			{children}
		</MeContext.Provider>
	)
}

