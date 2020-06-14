import React from 'react';
import { css, cx } from 'emotion';
import { platformConnect } from '../PlatformProvider';
import View from '../View';
import { useTheme } from '../../css';

function Text({
	as = 'span',
	align,
	className,
	display,
	forwardedRef,
	size,
	weight = 400,
	lineHeight = 1.2,
	variant,
	...props
}) {
	const { isDark, ...theme } = useTheme();

	const baseStyles = css`
		color: ${theme.colorText};

		${isDark &&
		css`
			color: ${theme.colorTextDark};
		`}
	`;

	const modifierStyles = css({
		display,
		fontSize: size,
		fontWeight: weight,
		lineHeight,
		textAlign: align,
	});

	const mutedStyles = css`
		opacity: 0.6;
	`;

	const classes = cx(
		baseStyles,
		modifierStyles,
		variant === 'muted' && mutedStyles,
		className,
	);

	return <View as={as} className={classes} ref={forwardedRef} {...props} />;
}

export default platformConnect('Text', Text);
