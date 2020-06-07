import React from 'react';
import { css, cx } from 'emotion';
import { platformConnect } from '../PlatformProvider';
import { useTheme } from '../../css';

function IconButton({
	className,
	children,
	isBlock = false,
	forwardedRef,
	size = 'medium',
	variant = 'secondary',
	...props
}) {
	const { isDark, platformStyles, ...theme } = useTheme();

	const baseStyles = css`
		align-items: center;
		appearance: none;
		background-color: ${theme.iconControlBackgroundColor};
		border-radius: ${theme.iconControlBorderRadius};
		border: none;
		color: ${theme.colorText};
		cursor: pointer;
		display: inline-flex;
		height: ${theme.iconControlSize};
		justify-content: center;
		outline: none;
		padding: ${theme.iconControlPadding};
		transform: ${theme.iconControlTransform};
		user-select: none;
		width: ${theme.iconControlSize};

		&:hover,
		&:focus {
			background-color: ${theme.iconControlBackgroundColorHover};
		}

		&:active {
			transform: ${theme.iconControlTransformActive};
			transform-origin: center center;
		}

		&:hover,
		&:active,
		&:focus {
			transition: all ${theme.iconControlTransitionDuration}
				${theme.iconControlTransitionTimingFunction};
		}

		svg {
			display: block;
		}
	`;

	const blockStyles = css`
		display: flex;
	`;

	const tertiaryStyles = css`
		background-color: transparent;
	`;

	const darkStyles = css`
		background-color: ${theme.iconControlBackgroundColorDark};
		color: ${theme.colorTextDark};

		&:hover,
		&:focus {
			background-color: ${theme.iconControlBackgroundColorHoverDark};
		}
	`;

	const largeStyles = css`
		height: ${theme.iconControlSizeLarge};
		width: ${theme.iconControlSizeLarge};
	`;

	const smallStyles = css`
		height: ${theme.iconControlSizeSmall};
		width: ${theme.iconControlSizeSmall};
	`;

	const classes = cx(
		baseStyles,
		isBlock && blockStyles,
		isDark && darkStyles,
		size === 'large' && largeStyles,
		size === 'small' && smallStyles,
		variant === 'tertiary' && tertiaryStyles,
		platformStyles,
		className,
	);

	return (
		<button className={classes} ref={forwardedRef} {...props}>
			{children}
		</button>
	);
}

export default platformConnect('IconButton', IconButton);
