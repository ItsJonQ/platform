import React from 'react';
import { css, cx } from 'emotion';
import { platformConnect } from '../PlatformProvider';

function Icon({ className, forwardedRef, icon, size = 20, ...props }) {
	const classes = cx(
		css`
			display: block;
		`,
		className,
	);

	if (!icon) return null;

	return React.cloneElement(icon, {
		className: classes,
		ref: forwardedRef,
		size,
		...props,
	});
}

export default platformConnect('Icon', Icon);
