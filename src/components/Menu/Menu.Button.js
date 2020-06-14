import React from 'react';
import { css, cx } from 'emotion';
import { platformConnect } from '../PlatformProvider';
import Button from '../Button';
import { MenuButton as BaseMenuButton } from 'reakit/Menu';
import { useMenuContext } from './Menu.Context';

function MenuButton({ className, forwardedRef, ...props }) {
	const { menu } = useMenuContext();
	const baseStyles = css``;

	const classes = cx(baseStyles, className);

	return (
		<BaseMenuButton
			{...menu}
			as={Button}
			className={classes}
			ref={forwardedRef}
			{...props}
		/>
	);
}

export default platformConnect('MenuButton', MenuButton);
