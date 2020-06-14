import React from 'react';
import { css, cx } from 'emotion';
import { DialogBackdrop } from 'reakit/Dialog';
import { Menu as BaseMenu } from 'reakit/Menu';
import { platformConnect } from '../PlatformProvider';
import Card from '../Card';
import Spacer from '../Spacer';
import Text from '../Text';
import View from '../View';
import Viewport from '../Viewport';
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

	const wrapperStyles = css`
		margin: 0;
		outline: none;

		${breakpoint('xs')`
			transform: initial !important;
		`}
	`;

	const baseStyles = css`
		min-width: 180px;
	`;

	const cardWrapperStyles = css`
		z-index: 999;
		opacity: 0;
		outline: none;

		[data-enter] & {
			opacity: 1;
		}

		${breakpoint('xs')`
			position: fixed;
			bottom: 8px;
			top: initial;
			left: 8px;
			right: 8px;
			transform: translate3d(0, 100%, 0);
			max-height: 90vh;
			transition: transform 180ms ease-in-out, opacity 180ms ease-in-out;

			[data-enter] & {
				transform: translate3d(0, 0, 0);
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
				as={View}
				className={wrapperStyles}
				ref={forwardedRef}
				preventBodyScroll={preventBodyScroll}
				{...props}
			>
				<View className={cardWrapperStyles}>
					<Card className={classes} elevation={5}>
						<Spacer p={1.5} className={contentStyles}>
							{children}
						</Spacer>
					</Card>
					<Viewport.Mobile>
						<Spacer pt={1} pb={0}>
							<Card className={classes} elevation={5}>
								<View className={contentStyles}>
									<Item onClick={menu.hide}>
										<Text
											align="center"
											display="block"
											weight={600}
										>
											Close
										</Text>
									</Item>
								</View>
							</Card>
						</Spacer>
					</Viewport.Mobile>
				</View>
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
