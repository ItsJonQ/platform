import React from 'react';
import { css, cx } from 'emotion';
import { platformConnect } from '../PlatformProvider';
import View from '../View';
import { useTheme } from '../../css';

function ControlListItemSeparator({
	className,
	forwardedRef,
	hasIcon = false,
	...props
}) {
	const { isDark, breakpoint, space } = useTheme();

	const baseStyles = css`
		border-bottom: 1px solid rgba(0, 0, 0, 0.1);
		position: absolute;
		bottom: 0;
		left: ${space(4)};
		right: 0;
		margin: 0 !important;

		*:last-child > & {
			border-bottom: none;
		}

		${breakpoint('md')`
			left: ${space(4)};
			right: ${space(4)};
		`};

		${isDark &&
		css`
			border-bottom: 1px solid rgba(255, 255, 255, 0.1);
		`}
	`;

	const iconStyles = css`
		left: ${space(12)};

		${breakpoint('md')`
			left: ${space(12)};
		`};
	`;

	const classes = cx(baseStyles, hasIcon && iconStyles, className);

	return (
		<View
			aria-hidden="true"
			className={classes}
			ref={forwardedRef}
			{...props}
		/>
	);
}

export default platformConnect(
	'ControlListItemSeparator',
	ControlListItemSeparator,
);
