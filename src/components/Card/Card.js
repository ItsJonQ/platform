import React from 'react';
import { css, cx } from 'emotion';
import { platformConnect } from '../PlatformProvider';
import Elevation from '../Elevation';
import View from '../View';
import Body from './Card.Body';
import Header from './Card.Header';
import Footer from './Card.Footer';

function Card({ children, className, elevation = 2, forwardedRef, ...props }) {
	const baseStyles = css`
		background: white;
		border: 1px solid transparent;
		border-radius: 8px;
		position: relative;
	`;

	const classes = cx(baseStyles, className);

	return (
		<View className={classes} ref={forwardedRef} {...props}>
			{children}
			<Elevation value={1} isInteractive={false} offset={-1} />
			<Elevation value={elevation} isInteractive={false} offset={-1} />
		</View>
	);
}

const ConnectedComponent = platformConnect('Card', Card);
ConnectedComponent.Body = Body;
ConnectedComponent.Header = Header;
ConnectedComponent.Footer = Footer;

export default ConnectedComponent;
