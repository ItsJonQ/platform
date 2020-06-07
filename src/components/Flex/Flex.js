import React from 'react';
import { css, cx } from 'emotion';
import { platformConnect } from '../PlatformProvider';
import { useTheme } from '../../css';
import { toPx } from '../../utils';

import Block from './Flex.Block';
import Item from './Flex.Item';

function Flex({
	as = 'div',
	align = 'center',
	className,
	children,
	justify = 'space-between',
	gap = 4,
	forwardedRef,
	...props
}) {
	const { gridBase, platformStyles } = useTheme();

	const baseStyles = css`
		align-items: ${align};
		display: flex;
		justify-content: ${justify};

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
