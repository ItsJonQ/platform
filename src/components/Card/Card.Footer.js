import React from 'react';
import { css, cx } from 'emotion';
import { platformConnect } from '../PlatformProvider';
import Flex from '../Flex';
import { useTheme } from '../../css';

function CardFooter({ className, forwardedRef, ...props }) {
	const { space } = useTheme();

	const baseStyles = css`
		min-height: ${space(12)};
		padding: ${space(4)};
		position: relative;
	`;

	const classes = cx(baseStyles, className);

	return <Flex className={classes} ref={forwardedRef} {...props} />;
}

export default platformConnect('CardFooter', CardFooter);
