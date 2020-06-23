import React from 'react';
import { css, cx } from 'emotion';
import { platformConnect } from '../PlatformProvider';
import View from '../View';
import { useTheme } from '../../css';

function CardBody({ className, forwardedRef, ...props }) {
	const { space } = useTheme();
	const baseStyles = css`
		padding: ${space(4)};
		position: relative;
	`;

	const classes = cx(baseStyles, className);

	return <View className={classes} ref={forwardedRef} {...props} />;
}

export default platformConnect('CardBody', CardBody);
