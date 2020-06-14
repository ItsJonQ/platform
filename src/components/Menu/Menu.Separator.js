import React from 'react';
import { css, cx } from 'emotion';
import { platformConnect } from '../PlatformProvider';
import View from '../View';
import { MenuSeparator as BaseMenuSeparator } from 'reakit/Menu';
import { useMenuContext } from './Menu.Context';

function MenuSeparator({ className, forwardedRef, ...props }) {
	const { menu } = useMenuContext();
	const baseStyles = css``;

	const classes = cx(baseStyles, className);

	return (
		<BaseMenuSeparator
			{...menu}
			as={View}
			className={classes}
			ref={forwardedRef}
			{...props}
		/>
	);
}

export default platformConnect('MenuSeparator', MenuSeparator);
