import React from 'react';
import { boolean, number, select } from '@storybook/addon-knobs';
import Button from '../Button';

export default {
	title: 'Button',
	component: Button,
};

export const _default = () => {
	const props = {
		disabled: boolean('disabled', true),
		elevation: number('elevation', 0),
		isDestructive: boolean('isDestructive', true),
		isLoading: boolean('isLoading', true),
		isOutline: boolean('isOutline', true),
		isRounded: boolean('isRounded', true),
		size: select(
			'size',
			{
				large: 'large',
				medium: 'medium',
				small: 'small',
			},
			'medium',
		),
		variant: select(
			'variant',
			{
				primary: 'primary',
				secondary: 'secondary',
				tertiary: 'tertiary',
				link: 'link',
				'plain-link': 'plain-link',
			},
			'secondary',
		),
	};

	return <Button {...props}>Action</Button>;
};
