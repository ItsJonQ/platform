import { createContext, useContext } from 'react';

export const MENU_PROPS = {
	animated: 200,
	unstable_offset: [0, 4],
	modal: true,
};

export const MenuContext = createContext({
	menu: MENU_PROPS,
	hideOnClickItem: true,
});

export const useMenuContext = () => useContext(MenuContext);
