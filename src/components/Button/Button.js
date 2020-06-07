import React from 'react';
import { css, cx } from 'emotion';
import { platformConnect } from '../PlatformProvider';
import { useTheme } from '../../css';

function Button({
	className,
	children,
	isBlock = false,
	isRounded = false,
	isOutline = false,
	forwardedRef,
	size = 'medium',
	variant = 'secondary',
	...props
}) {
	const { isDark, platformStyles, ...theme } = useTheme();

	const baseStyles = css`
		align-items: center;
		appearance: none;
		background-color: ${theme.buttonBackgroundColor};
		border-radius: ${theme.buttonBorderRadius};
		border-color: transparent;
		border-style: solid;
		border-width: ${theme.buttonBorderWidth};
		box-shadow: ${theme.buttonBoxShadow};
		color: ${theme.colorText};
		cursor: pointer;
		display: inline-flex;
		font-weight: ${theme.buttonFontWeight};
		height: ${theme.buttonHeight};
		justify-content: center;
		line-height: ${theme.buttonLineHeight};
		outline: none;
		padding-left: ${theme.buttonPaddingX};
		padding-right: ${theme.buttonPaddingX};
		position: relative;
		transform: ${theme.buttonTransform};
		text-decoration: none;
		user-select: none;
		width: auto;

		&:hover,
		&:focus {
			background-color: ${theme.buttonBackgroundColorHover};
		}

		&:active {
			transform: ${theme.buttonTransformActive};
			transform-origin: center center;
		}

		&:hover,
		&:active,
		&:focus {
			transition: all ${theme.buttonTransitionDuration}
				${theme.buttonTransitionTimingFunction};
		}

		svg {
			display: block;
		}
	`;

	const blockStyles = css`
		display: flex;
		width: 100%;
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
	`;

	const primaryOutlineStyles = css`
		background-color: transparent;
		border-color: ${theme.buttonBackgroundColorPrimary};
		color: ${theme.buttonBackgroundColorPrimary};

		&:hover,
		&:active,
		&:focus {
			color: ${theme.buttonTextColorPrimary};
		}
	`;

	const secondaryOutlineStyles = css`
		background-color: transparent;
		border-color: ${theme.buttonBorderColorOutline};

		${isDark &&
		`
			border-color: ${theme.buttonBorderColorOutlineDark};
		`}

		&:hover,
		&:active,
		&:focus {
			border-color: transparent;
		}
	`;

	const tertiaryStyles = css`
		background-color: transparent;
	`;

	const linkStyles = css`
		background: none;
		border: none;
		color: ${theme.buttonBackgroundColorPrimary};
	`;

	const plainLinkStyles = css`
		padding-left: 0;
		padding-right: 0;

		&:hover,
		&:active,
		&:focus {
			text-decoration: underline;
		}
	`;

	const roundedStyles = css`
		border-radius: ${theme.buttonBorderRadiusRound};
	`;

	const darkStyles = css`
		background-color: ${theme.buttonBackgroundColorDark};
		color: ${theme.colorTextDark};

		&:hover,
		&:focus {
			background-color: ${theme.buttonBackgroundColorHoverDark};
		}
	`;

	const largeStyles = css`
		height: ${theme.buttonHeightLarge};
	`;

	const smallStyles = css`
		height: ${theme.buttonHeightSmall};
	`;

	const classes = cx(
		baseStyles,
		isBlock && blockStyles,
		isRounded && roundedStyles,
		isDark && darkStyles,
		size === 'large' && largeStyles,
		size === 'small' && smallStyles,
		variant === 'primary' && primaryStyles,
		variant === 'primary' && isOutline && primaryOutlineStyles,
		variant === 'secondary' && isOutline && secondaryOutlineStyles,
		variant === 'tertiary' && tertiaryStyles,
		variant === 'link' && linkStyles,
		variant === 'plain-link' && linkStyles && plainLinkStyles,
		platformStyles,
		className,
	);

	return (
		<button className={classes} ref={forwardedRef} {...props}>
			<span>{children}</span>
		</button>
	);
}

export default platformConnect('Button', Button);
