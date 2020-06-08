import React from 'react';
import { boolean, number, text } from '@storybook/addon-knobs';
import SearchInput from '../SearchInput';
import Spacer from '../../Spacer';

export default {
	title: 'SearchInput',
	component: SearchInput,
};

export const _default = () => {
	const props = {
		elevation: number('elevation', 0),
		isRounded: boolean('isRounded', true),
		placeholder: text('placeholder', 'Search...'),
	};

	console.log(props);

	return (
		<Spacer py={10} px={20}>
			<SearchInput {...props} />
		</Spacer>
	);
};
