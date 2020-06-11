import React from 'react';
import { css, cx } from 'emotion';
import { platformConnect } from '../PlatformProvider';
import View from '../View';

function CardBody({ className, forwardedRef, ...props }) {
	const baseStyles = css`
		padding: 16px;
		position: relative;
	`;

	const classes = cx(baseStyles, className);

	return <View className={classes} ref={forwardedRef} {...props} />;
}

export default platformConnect('CardBody', CardBody);
