import React from 'react';
import { css, cx } from 'emotion';
import { platformConnect } from '../PlatformProvider';
import { useTheme } from '../../css';
import { toPx } from '../../utils';

import Block from './Flex.Block';
import Item from './Flex.Item';

function Flex({
	align = 'center',
	as = 'div',
	children,
	className,
	forwardedRef,
	gap = 4,
	justify = 'space-between',
	maxWidth = '100%',
	minWidth = '0',
	width = '100%',
	...props
}) {
	const { gridBase, platformStyles } = useTheme();

	const baseStyles = css`
		align-items: ${align};
		display: flex;
		justify-content: ${justify};
		max-width: ${toPx(maxWidth)};
		min-width: ${toPx(minWidth)};
		width: ${toPx(width)};

		> * {
			margin-right: ${toPx(gridBase * gap)};

			&:last-child {
				margin-right: 0;
			}
		}
	`;

	const classes = cx(baseStyles, platformStyles, className);

	return React.createElement(
		as,
		{ className: classes, ref: forwardedRef, ...props },
		children,
	);
}

const ConnectedComponent = platformConnect('Flex', Flex);

ConnectedComponent.Block = Block;
ConnectedComponent.Item = Item;

export default ConnectedComponent;
