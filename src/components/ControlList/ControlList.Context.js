import React, { createContext, useContext } from 'react';
import { useMenuState } from 'reakit/Menu';

export const ControlListContext = createContext();
export const useControlListContext = () => useContext(ControlListContext);

export function ControlListProvider({
	children,
	menu: menuStateProps = {},
	value = {},
}) {
	const menu = useMenuState({
		modal: false,
		visible: true,
		...menuStateProps,
	});

	const contextValue = {
		...value,
		menu,
	};

	return (
		<ControlListContext.Provider value={contextValue}>
			{children}
		</ControlListContext.Provider>
	);
}
