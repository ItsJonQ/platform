import React from 'react';
import { Button as BaseButton } from 'reakit/Button';
import { css, cx } from 'emotion';
import { platformConnect } from '../PlatformProvider';
import { useTheme } from '../../css';
import Elevation from '../Elevation';
import View from '../View';

function IconButton({
	as = 'button',
	className,
	children,
	elevation = 0,
	elevationActive,
	elevationFocus,
	elevationHover,
	href,
	isBlock = false,
	isDestructive = false,
	forwardedRef,
	size = 'medium',
	variant = 'secondary',
	...props
}) {
	const { isDark, ...theme } = useTheme();
	const componentTagName = href ? 'a' : as;

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
		position: relative;
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

		&[disabled],
		&[aria-disabled='true'] {
			cursor: auto;
			opacity: 0.5;
		}

		svg {
			display: block;
		}
	`;

	const blockStyles = css`
		display: flex;
	`;

	const destructiveStyles = css`
		color: ${theme.colorDestructive};
	`;

	const primaryStyles = css`
		background-color: ${theme.buttonBackgroundColorPrimary};
		color: ${theme.buttonTextColorPrimary};

		&:hover,
		&:focus {
			background-color: ${theme.buttonBackgroundColorPrimaryHover};
		}

		&:focus {
			border-color: ${theme.buttonBorderColorFocus};
			box-shadow: ${theme.buttonBoxShadowFocus};
		}

		&:active {
			background-color: ${theme.buttonBackgroundColorPrimaryActive};
		}

		${isDestructive &&
		`
			background-color:  ${theme.colorDestructive};

			&:hover,
			&:focus {
				background-color: ${theme.colorDestructiveHover};
			}

			&:focus {
				border-color: ${theme.buttonBorderColorFocus};
				box-shadow: ${theme.buttonBoxShadowDestructiveFocus};
			}

			&:active {
				background-color: ${theme.colorDestructiveActive};
			}
		`}
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

	const tinyStyles = css`
		height: ${theme.iconControlSizeTiny};
		width: ${theme.iconControlSizeTiny};
	`;

	const classes = cx(
		baseStyles,
		isBlock && blockStyles,
		isDark && darkStyles,
		isDestructive && destructiveStyles,
		size === 'large' && largeStyles,
		size === 'small' && smallStyles,
		size === 'tiny' && tinyStyles,
		variant === 'primary' && primaryStyles,
		variant === 'tertiary' && tertiaryStyles,
		className,
	);

	return (
		<View
			__internal_baseComponent={BaseButton}
			as={componentTagName}
			className={classes}
			href={href}
			ref={forwardedRef}
			{...props}
		>
			{children}
			<Elevation
				active={elevationActive}
				focus={elevationFocus}
				hover={elevationHover}
				value={elevation}
			/>
		</View>
	);
}

export default platformConnect('IconButton', IconButton);
