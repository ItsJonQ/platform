import React from 'react';
import { css, cx } from 'emotion';
import { platformConnect } from '../PlatformProvider';
import View from '../View';
import { MenuItem as BaseMenuItem } from 'reakit/Menu';
import { useMenuContext } from './Menu.Context';
import { useTheme } from '../../css';

function MenuItem({ className, forwardedRef, onClick, ...props }) {
	const { hideOnClickItem, menu } = useMenuContext();
	const { isDark } = useTheme();

	const handleOnClick = (...args) => {
		onClick && onClick(...args);

		if (hideOnClickItem && onClick) {
			menu.hide();
		}
	};

	const baseStyles = css`
		background: transparent;
		border-radius: 6px;
		cursor: pointer;
		padding: 8px 12px;
		outline: none;
		transition: background 60ms ease-in-out;

		&:hover {
			transition: background 20ms ease-in-out;
		}

		&:focus {
			background: rgba(0, 0, 0, 0.04);
		}

		&:active {
			background: rgba(0, 0, 0, 0.1);
			user-select: none;
		}

		${isDark &&
		css`
			&:focus {
				background: rgba(255, 255, 255, 0.1);
			}

			&:active {
				background: rgba(255, 255, 255, 0.04);
			}
		`}
	`;

	const classes = cx(baseStyles, className);

	return (
		<BaseMenuItem
			{...menu}
			as={View}
			className={classes}
			onClick={handleOnClick}
			ref={forwardedRef}
			{...props}
		/>
	);
}

export default platformConnect('MenuItem', MenuItem);
