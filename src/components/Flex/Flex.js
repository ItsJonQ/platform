import React from 'react';
import { css, cx } from 'emotion';
import { platformConnect } from '../PlatformProvider';
import { useTheme } from '../../css';
import { toPx } from '../../utils';
import View from '../View';

import Block from './Flex.Block';
import Item from './Flex.Item';

function Flex({
	align = 'center',
	className,
	forwardedRef,
	gap = 4,
	justify = 'space-between',
	maxWidth = '100%',
	minWidth = '0',
	width = '100%',
	...props
}) {
	const { gridBase } = useTheme();

	const baseStyles = css`
		align-items: ${align};
		display: flex;
		justify-content: ${justify};
		max-width: ${toPx(maxWidth)};
		min-width: ${toPx(minWidth)};
		width: ${toPx(width)};

		> * {
			margin-left: ${toPx(gridBase * gap)};

			&:first-child {
				margin-left: 0;
			}
		}
	`;

	const classes = cx(baseStyles, className);

	return <View className={classes} ref={forwardedRef} {...props} />;
}

const ConnectedComponent = platformConnect('Flex', Flex);

ConnectedComponent.Block = Block;
ConnectedComponent.Item = Item;

export default ConnectedComponent;
