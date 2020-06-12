import React from 'react';
import { css, cx } from 'emotion';
import { platformConnect } from '../PlatformProvider';
import Elevation from '../Elevation';
import Surface from '../Surface';
import Body from './Card.Body';
import Header from './Card.Header';
import Footer from './Card.Footer';

function Card({ children, className, elevation = 2, forwardedRef, ...props }) {
	const baseStyles = css`
		border-radius: 8px;
	`;

	const classes = cx(baseStyles, className);

	return (
		<Surface className={classes} ref={forwardedRef} {...props}>
			{children}
			<Elevation value={elevation ? 1 : 0} isInteractive={false} />
			<Elevation value={elevation} isInteractive={false} />
		</Surface>
	);
}

const ConnectedComponent = platformConnect('Card', Card);
ConnectedComponent.Body = Body;
ConnectedComponent.Header = Header;
ConnectedComponent.Footer = Footer;

export default ConnectedComponent;
