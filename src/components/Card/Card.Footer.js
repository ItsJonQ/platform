import React from 'react';
import { css, cx } from 'emotion';
import { platformConnect } from '../PlatformProvider';
import Flex from '../Flex';

function CardFooter({ className, forwardedRef, ...props }) {
	const baseStyles = css`
		padding: 16px;
	`;

	const classes = cx(baseStyles, className);

	return <Flex className={classes} ref={forwardedRef} {...props} />;
}

export default platformConnect('CardFooter', CardFooter);
