import React from 'react';
import { css, cx } from 'emotion';
import { platformConnect } from '../PlatformProvider';
import { toPx } from '../../utils';
import View from '../View';

function FlexItem({
	className,
	forwardedRef,
	maxWidth = '100%',
	minWidth = '0',
	width = 'auto',
	...props
}) {
	const baseStyles = css`
		display: block;
		max-width: ${toPx(maxWidth)};
		min-width: ${toPx(minWidth)};
		width: ${toPx(width)};
	`;

	const classes = cx(baseStyles, className);

	return <View className={classes} ref={forwardedRef} {...props} />;
}

export default platformConnect('FlexItem', FlexItem);
