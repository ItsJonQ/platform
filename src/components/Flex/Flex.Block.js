import React from 'react';
import { css, cx } from 'emotion';
import { platformConnect } from '../PlatformProvider';
import { useTheme } from '../../css';

function FlexBlock({
	as = 'div',
	align = 'center',
	children,
	className,
	justify = 'space-between',
	gap = 4,
	forwardedRef,
	...props
}) {
	const { platformStyles } = useTheme();

	const baseStyles = css`
		flex: 1;
		min-width: 0;
		max-width: 100%;
	`;

	const classes = cx(baseStyles, platformStyles, className);

	return React.createElement(
		as,
		{ className: classes, ref: forwardedRef, ...props },
		children,
	);
}

export default platformConnect('FlexBlock', FlexBlock);
