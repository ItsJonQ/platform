import React from 'react';
import { css, cx } from 'emotion';
import { platformConnect } from '../PlatformProvider';
import Flex from '../Flex';
import { useTheme } from '../../css';

function CardHeader({ className, forwardedRef, ...props }) {
	const { isDark, space, ...theme } = useTheme();

	const baseStyles = css`
		border-bottom: 1px solid;
		border-bottom-color: ${theme.cardSectionBorderColor};
		min-height: ${space(12)};
		padding: ${space(2)};
		position: relative;
	`;

	const darkStyles = css`
		border-bottom-color: ${theme.cardSectionBorderColorDark};
	`;

	const classes = cx(baseStyles, isDark && darkStyles, className);

	return <Flex className={classes} ref={forwardedRef} {...props} />;
}

export default platformConnect('CardHeader', CardHeader);
