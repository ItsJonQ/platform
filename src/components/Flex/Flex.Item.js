import React from 'react';
import { css, cx } from 'emotion';
import { platformConnect } from '../PlatformProvider';
import { useTheme } from '../../css';

function FlexItem({ as = 'div', children, className, forwardedRef, ...props }) {
	const { platformStyles } = useTheme();

	const baseStyles = css`
		max-width: 100%;
		min-width: 0;
	`;

	const classes = cx(baseStyles, platformStyles, className);

	return React.createElement(
		as,
		{ className: classes, ref: forwardedRef, ...props },
		children,
	);
}

export default platformConnect('FlexItem', FlexItem);
