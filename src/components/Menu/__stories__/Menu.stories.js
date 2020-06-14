import React from 'react';
import Menu from '../Menu';

export default {
	title: 'Menu',
	component: Menu,
};

export const _default = () => {
	return (
		<Menu.Provider menu={{ visible: true }}>
			<Menu.Button>Open</Menu.Button>
			<Menu>
				<Menu.Item>Settings</Menu.Item>
				<Menu.Item>Extensions</Menu.Item>
			</Menu>
		</Menu.Provider>
	);
};
