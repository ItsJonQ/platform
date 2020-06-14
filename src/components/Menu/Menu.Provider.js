import React from 'react';
import { platformConnect } from '../PlatformProvider';
import { useMenuState } from 'reakit/Menu';
import { MenuContext, MENU_PROPS } from './Menu.Context';

function MenuProvider({
	children,
	hideOnClickItem = true,
	menu: menuStateProps = {},
	value = {},
	forwardedRef,
	...props
}) {
	const menu = useMenuState({ ...MENU_PROPS, ...menuStateProps });

	const contextValue = {
		...props,
		hideOnClickItem,
		menu,
	};

	return (
		<MenuContext.Provider
			ref={forwardedRef}
			value={contextValue}
			{...props}
		>
			{children}
		</MenuContext.Provider>
	);
}

export default platformConnect('MenuProvider', MenuProvider);
