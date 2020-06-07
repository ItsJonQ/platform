import React from 'react';
import { css, cx } from 'emotion';
import { platformConnect } from '../PlatformProvider';
import { useTheme } from '../../css';
import { toPx } from '../../utils';

function FlexBlock({
	as = 'div',
	children,
	className,
	maxWidth = '100%',
	minWidth = '0',
	forwardedRef,
	...props
}) {
	const { platformStyles } = useTheme();

	const baseStyles = css`
		flex: 1;
		max-width: ${toPx(maxWidth)};
		min-width: ${toPx(minWidth)};
	`;

	const classes = cx(baseStyles, platformStyles, className);

	return React.createElement(
		as,
		{ className: classes, ref: forwardedRef, ...props },
		children,
	);
}

export default platformConnect('FlexBlock', FlexBlock);
