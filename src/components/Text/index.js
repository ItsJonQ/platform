import React from 'react';
import { css, cx } from 'emotion';
import { platformConnect } from '../PlatformProvider';
import View from '../View';
import { useTheme } from '../../css';

function Text({
	as = 'span',
	className,
	forwardedRef,
	fontWeight = 400,
	...props
}) {
	const { isDark, ...theme } = useTheme();
	const baseStyles = css`
		color: ${theme.colorText};
		font-weight: ${fontWeight};

		${isDark &&
		css`
			color: ${theme.colorTextDark};
		`}
	`;

	const classes = cx(baseStyles, className);

	return <View as={as} className={classes} ref={forwardedRef} {...props} />;
}

export default platformConnect('Text', Text);
