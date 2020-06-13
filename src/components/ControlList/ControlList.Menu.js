import React from 'react';
import { css, cx } from 'emotion';
import { Menu } from 'reakit/Menu';
import { platformConnect } from '../PlatformProvider';
import { useControlListContext } from './ControlList.Context';
import View from '../View';

function ControlListMenu({ className, forwardedRef, label, ...props }) {
	const { menu } = useControlListContext();

	const baseStyles = css`
		outline: none;
	`;

	const classes = cx(baseStyles, className);

	return (
		<View
			__internal_baseComponent={Menu}
			aria-label={label}
			className={classes}
			ref={forwardedRef}
			hideOnClickOutside={false}
			{...menu}
			{...props}
		/>
	);
}

export default platformConnect('ControlListMenu', ControlListMenu);
