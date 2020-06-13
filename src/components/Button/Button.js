import React from 'react';
import { Button as BaseButton } from 'reakit/Button';
import { css, cx } from 'emotion';
import { platformConnect } from '../PlatformProvider';
import { useTheme } from '../../css';
import Elevation from '../Elevation';
import Flex from '../Flex';
import Spinner from '../Spinner';
import View from '../View';

function Button({
	as = 'button',
	className,
	children,
	elevation = 0,
	elevationActive,
	elevationFocus,
	elevationHover,
	justify = 'center',
	gap = 2,
	href,
	isBlock = false,
	isDestructive = false,
	isLoading = false,
	isRounded = false,
	isNarrow = false,
	isOutline = false,
	prefix,
	suffix,
	forwardedRef,
	size = 'medium',
	variant = 'secondary',
	...props
}) {
	const { isDark, gridBase, ...theme } = useTheme();
	const componentTagName = href ? 'a' : as;

	const buttonTransition = `all ${theme.buttonTransitionDuration}
	${theme.buttonTransitionTimingFunction}`;

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
		line-height: ${theme.buttonHeight};
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
			background-color: ${theme.buttonBackgroundColorActive};
			transform: ${theme.buttonTransformActive};
			transform-origin: center center;
		}

		&:hover,
		&:active,
		&:focus {
			transition: ${buttonTransition};
		}

		&[disabled],
		&[aria-disabled='true'] {
			cursor: auto;
			opacity: 0.5;
		}

		svg {
			display: block;
		}

		${isDestructive &&
		css`
			color: ${theme.colorDestructive};
		`}

		${isNarrow &&
		css`
			padding-left: ${theme.buttonPaddingXNarrow};
			padding-right: ${theme.buttonPaddingXNarrow};
		`}
	`;

	const blockStyles = css`
		display: flex;
		width: 100%;

		&:active {
			transform: scale(1);
		}
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

		${isDestructive &&
		`
			color: ${theme.colorDestructive};
			border-color: ${theme.colorDestructive};
		`}
	`;

	const tertiaryStyles = css`
		background-color: transparent;
	`;

	const linkStyles = css`
		background: none;
		border-color: transparent;
		color: ${theme.buttonBackgroundColorPrimary};

		${isDestructive &&
		`
			color: ${theme.colorDestructive};
		`}
	`;

	const plainLinkStyles = css`
		padding-left: 0;
		padding-right: 0;

		&:hover,
		&:active,
		&:focus {
			background-color: transparent;
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

		&:active {
			background-color: ${theme.buttonBackgroundColorActiveDark};
		}

		${isDestructive &&
		`
		color: ${theme.colorDestructive};
		`}
	`;

	const largeStyles = css`
		height: ${theme.buttonHeightLarge};
		line-height: ${theme.buttonHeightLarge};
	`;

	const smallStyles = css`
		height: ${theme.buttonHeightSmall};
		line-height: ${theme.buttonHeightSmall};
	`;

	const prefixSuffixStyles = css`
		line-height: ${theme.inputLineHeight};

		svg {
			display: block;
			user-select: none;
		}
	`;

	const contentStyles = css`
		line-height: ${theme.buttonContentLineHeight};
		min-height: ${theme.buttonLineHeight};
		white-space: nowrap;
	`;

	const loadingStyles = css`
		opacity: 1;

		${isLoading &&
		`
			opacity: 0;
		`}
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
		(variant === 'link' || variant === 'plain-link') && linkStyles,
		variant === 'plain-link' && plainLinkStyles,
		className,
	);

	return (
		<View
			__internal_baseComponent={BaseButton}
			aria-busy={isLoading}
			as={componentTagName}
			className={classes}
			href={href}
			ref={forwardedRef}
			{...props}
		>
			<LoadingOverlay isLoading={isLoading} />
			<Flex as="span" gap={gap} justify={justify}>
				{prefix && (
					<Flex.Item
						as="span"
						className={cx(prefixSuffixStyles, loadingStyles)}
					>
						{prefix}
					</Flex.Item>
				)}
				<Flex.Item
					className={cx(contentStyles, loadingStyles)}
					as="span"
				>
					{children}
				</Flex.Item>
				{suffix && (
					<Flex.Item
						as="span"
						className={cx(prefixSuffixStyles, loadingStyles)}
					>
						{suffix}
					</Flex.Item>
				)}
			</Flex>
			<Elevation
				active={elevationActive}
				as="span"
				focus={elevationFocus}
				hover={elevationHover}
				offset={-1}
				value={elevation}
			/>
		</View>
	);
}

export function LoadingOverlay({ isLoading = false }) {
	if (!isLoading) return null;

	const styles = css`
		pointer-events: none;
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
	`;

	return (
		<Flex aria-hidden="true" className={cx(styles)} justify="center">
			<Spinner color={'currentColor'} />
		</Flex>
	);
}

export default platformConnect('Button', Button);
