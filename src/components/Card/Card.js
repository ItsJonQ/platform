import React from 'react';
import { css, cx } from 'emotion';
import { platformConnect } from '../PlatformProvider';
import Elevation from '../Elevation';
import View from '../View';
import Body from './Card.Body';
import Header from './Card.Header';
import Footer from './Card.Footer';
import { useTheme } from '../../css';

function Card({ children, className, elevation = 2, forwardedRef, ...props }) {
	const { isDark, ...theme } = useTheme();

	const baseStyles = css`
		background-color: ${theme.cardBackgroundColor};
		border-radius: 8px;
		color: ${theme.colorText};
		position: relative;
	`;

	const darkStyles = css`
		background-color: ${theme.cardBackgroundColorDark};
		color: ${theme.colorTextDark};
	`;

	const classes = cx(baseStyles, isDark && darkStyles, className);

	return (
		<View className={classes} ref={forwardedRef} {...props}>
			{children}
			<Elevation value={1} isInteractive={false} />
			<Elevation value={elevation} isInteractive={false} />
		</View>
	);
}

const ConnectedComponent = platformConnect('Card', Card);
ConnectedComponent.Body = Body;
ConnectedComponent.Header = Header;
ConnectedComponent.Footer = Footer;

export default ConnectedComponent;
