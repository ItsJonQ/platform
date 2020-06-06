import React from 'react';
import { platformConnect } from '../PlatformProvider';
import { css, cx, useTheme } from '../../css';

function TextField({
	className,
	forwardedRef,
	isRounded = true,
	size = 'medium',
	...props
}) {
	const theme = useTheme();
	const { isDark } = theme;

	const baseStyles = css`
		background-color: ${theme.inputBackgroundColor};
		border-radius: ${isRounded
			? theme.inputBorderRadiusRound
			: theme.inputBorderRadius};
		border-width: ${theme.inputBorderWidth};
		border-style: ${theme.inputBorderStyle};
		border-color: ${theme.inputBorderColor};
		box-shadow: ${theme.inputBoxShadow};
		color: ${theme.colorText};
		display: flex;
		font-family: ${theme.inputFontFamily};
		font-size: ${theme.inputFontSize};
		line-height: ${theme.inputLineHeight};
		min-height: ${theme.inputHeight};
		outline: none;
		padding: ${theme.inputPadding};
		transition: ${theme.inputTransition};
		width: 100%;

		&:focus {
			border-color: ${theme.inputBorderColorFocus};
			box-shadow: ${theme.inputBoxShadowFocus};
		}
	`;

	const darkStyles = css`
		background-color: ${theme.inputBackgroundColorDark};
		border-color: ${theme.inputBorderColorDark};
		color: ${theme.colorTextDark};
	`;

	const smallStyles = css`
		min-height: ${theme.inputHeightSmall};
		padding: ${theme.inputPaddingSmall};
	`;

	const largeStyles = css`
		min-height: ${theme.inputHeightLarge};
		padding: ${theme.inputPaddingLarge};
	`;

	const classes = cx(
		baseStyles,
		isDark && darkStyles,
		size === 'small' && smallStyles,
		size === 'large' && largeStyles,
		className,
		theme.platformStyles,
	);

	return <input className={classes} ref={forwardedRef} {...props} />;
}

export default platformConnect('TextField', TextField);
