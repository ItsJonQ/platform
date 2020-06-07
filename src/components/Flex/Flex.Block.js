import React from 'react';
import { css, cx } from 'emotion';
import { platformConnect } from '../PlatformProvider';
import { toPx } from '../../utils';
import View from '../View';

function FlexBlock({
	className,
	maxWidth = '100%',
	minWidth = '0',
	forwardedRef,
	...props
}) {
	const baseStyles = css`
		display: block;
		flex: 1;
		max-width: ${toPx(maxWidth)};
		min-width: ${toPx(minWidth)};
	`;

	const classes = cx(baseStyles, className);

	return <View className={classes} ref={forwardedRef} {...props} />;
}

export default platformConnect('FlexBlock', FlexBlock);
