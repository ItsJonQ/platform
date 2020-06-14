import React from 'react';
import { css, cx } from 'emotion';
import { Menu as BaseMenu } from 'reakit/Menu';
import { platformConnect } from '../PlatformProvider';
import { DialogBackdrop } from 'reakit/Dialog';
import Card from '../Card';
import Spacer from '../Spacer';
import { useTheme } from '../../css';

import { useMenuContext } from './Menu.Context';
import Button from './Menu.Button';
import Item from './Menu.Item';
import Provider from './Menu.Provider';
import Separator from './Menu.Separator';

function Menu({
	children,
	className,
	label = 'Menu',
	forwardedRef,
	preventBodyScroll = false,
	...props
}) {
	const { menu } = useMenuContext();
	const { breakpoint } = useTheme();

	const baseStyles = css`
		min-width: 180px;
		outline: none;
		z-index: 999;
		opacity: 0;

		&[data-enter] {
			opacity: 1;
		}

		${breakpoint('xs')`
			position: fixed !important;
			bottom: 8px !important;
			top: initial !important;
			left: 8px !important;
			right: 8px !important;
			transform: translate3d(0, 100%, 0) !important;
			max-height: 90vh;
			transition: transform 180ms ease-in-out, opacity 180ms ease-in-out;

			&[data-enter] {
				transform: translate3d(0, 0, 0) !important;
			}
		`}
	`;

	const backdropStyles = css`
		perspective: 800px;
		transition: opacity 120ms ease-in-out;
		display: block;
		opacity: 0;
		z-index: 998;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(0, 0, 0, 0.5);

		&[data-enter] {
			opacity: 1;
		}

		${breakpoint('sm')`
			display: none;
		`}
	`;

	const contentStyles = css`
		overflow-x: hidden;
		overflow-y: auto;
		height: 100%;
		width: 100%;
	`;

	const classes = cx(baseStyles, className);
	const { animated, animating, visible } = menu;
	const other = { animated, animating, visible };

	return (
		<>
			<BaseMenu
				{...menu}
				aria-label={label}
				as={Card}
				className={classes}
				elevation={5}
				ref={forwardedRef}
				preventBodyScroll={preventBodyScroll}
				{...props}
			>
				<Spacer p={1.5} className={contentStyles}>
					{children}
				</Spacer>
			</BaseMenu>
			<DialogBackdrop {...other} className={backdropStyles} />
		</>
	);
}

const ConnectedComponent = platformConnect('Menu', Menu);

ConnectedComponent.Button = Button;
ConnectedComponent.Item = Item;
ConnectedComponent.Separator = Separator;
ConnectedComponent.Provider = Provider;

export default ConnectedComponent;
