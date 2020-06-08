import React from 'react';
import { css, cx } from 'emotion';
import { platformConnect } from '../PlatformProvider';
import View from '../View';

function ExampleComponent({ className, forwardedRef, ...props }) {
	const baseStyles = css``;

	const classes = cx(baseStyles, className);

	return <View className={classes} ref={forwardedRef} {...props} />;
}

export default platformConnect('ExampleComponent', ExampleComponent);
