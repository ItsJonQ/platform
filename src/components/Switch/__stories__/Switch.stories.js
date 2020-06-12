import React from 'react';
import Switch from '../Switch';

export default {
	title: 'Switch',
	component: Switch,
};

export const _default = () => {
	return (
		<>
			<Switch size="large" />
			<Switch />
			<Switch size="small" />
			<Switch size="small" disabled />
		</>
	);
};
