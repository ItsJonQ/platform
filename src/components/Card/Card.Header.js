import React from 'react';
import { css, cx } from 'emotion';
import { platformConnect } from '../PlatformProvider';
import Flex from '../Flex';
import { useTheme } from '../../css';

function CardHeader({ className, forwardedRef, ...props }) {
	const { space } = useTheme();

	const baseStyles = css`
		border-bottom: 1px solid rgba(0, 0, 0, 0.1);
		min-height: ${space(12)};
		padding: ${space(4)};
		position: relative;
	`;

	const classes = cx(baseStyles, className);

	return <Flex className={classes} ref={forwardedRef} {...props} />;
}

export default platformConnect('CardHeader', CardHeader);
