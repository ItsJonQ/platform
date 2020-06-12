import React from 'react';
import { css, cx } from 'emotion';
import { platformConnect } from '../PlatformProvider';
import Flex from '../Flex';
import { useTheme } from '../../css';

function CardFooter({ className, forwardedRef, ...props }) {
	const { isDark, space, ...theme } = useTheme();

	const baseStyles = css`
		border-top: 1px solid;
		border-top-color: ${theme.cardSectionBorderColor};
		min-height: ${space(12)};
		padding: ${space(2)};
		position: relative;
	`;

	const darkStyles = css`
		border-top-color: ${theme.cardSectionBorderColorDark};
	`;

	const classes = cx(baseStyles, isDark && darkStyles, className);

	return <Flex className={classes} ref={forwardedRef} {...props} />;
}

export default platformConnect('CardFooter', CardFooter);
