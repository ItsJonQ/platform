import React from 'react';
import { css, cx } from 'emotion';
import { platformConnect } from '../PlatformProvider';
import { useTheme } from '../../css';
import { toPx } from '../../utils';

function FlexItem({
	as = 'div',
	children,
	className,
	forwardedRef,
	maxWidth = '100%',
	minWidth = '0',
	width = 'auto',
	...props
}) {
	const { platformStyles } = useTheme();

	const baseStyles = css`
		max-width: ${toPx(maxWidth)};
		min-width: ${toPx(minWidth)};
		width: ${toPx(width)};
	`;

	const classes = cx(baseStyles, platformStyles, className);

	return React.createElement(
		as,
		{ className: classes, ref: forwardedRef, ...props },
		children,
	);
}

export default platformConnect('FlexItem', FlexItem);
