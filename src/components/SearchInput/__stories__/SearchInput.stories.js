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
		isLoading: boolean('isLoading', false),
		isRounded: boolean('isRounded', true),
		placeholder: text('placeholder', 'Search...'),
	};

	return (
		<Spacer py={10} px={20}>
			<SearchInput {...props} />
		</Spacer>
	);
};
