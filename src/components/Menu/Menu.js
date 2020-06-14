import React from 'react';
import { css, cx } from 'emotion';
import { platformConnect } from '../PlatformProvider';
import Card from '../Card';
import Spacer from '../Spacer';
import { Menu as BaseMenu } from 'reakit/Menu';
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

	const baseStyles = css`
		min-width: 180px;
		outline: none;
		z-index: 999;
	`;

	const classes = cx(baseStyles, className);

	return (
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
			<Spacer p={1.5}>{children}</Spacer>
		</BaseMenu>
	);
}

const ConnectedComponent = platformConnect('Menu', Menu);

ConnectedComponent.Button = Button;
ConnectedComponent.Item = Item;
ConnectedComponent.Separator = Separator;
ConnectedComponent.Provider = Provider;

export default ConnectedComponent;
