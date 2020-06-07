import React, { useRef, useState } from 'react';
import { css, cx } from 'emotion';
import Flex from '../Flex';
import { platformConnect } from '../PlatformProvider';
import { useTheme } from '../../css';
import { noop } from '../../utils';

function TextField({
	align,
	className,
	forwardedRef,
	gap = 2.5,
	isRounded = false,
	isSeamless = false,
	justify,
	onBlur = noop,
	onFocus = noop,
	prefix,
	size = 'medium',
	suffix,
	...props
}) {
	const [isFocused, setIsFocused] = useState(false);
	const theme = useTheme();
	const inputRef = useRef();
	const { isDark } = theme;

	const handleOnRootClick = () => {
		inputRef.current.focus();
	};

	const handleOnBlur = (event) => {
		onBlur(event);
		setIsFocused(false);
	};

	const handleOnFocus = (event) => {
		onFocus(event);
		setIsFocused(true);
	};

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
		outline: none;
		padding-left: ${theme.inputPaddingX};
		padding-right: ${theme.inputPaddingX};
		transition: ${theme.inputTransition};
		width: 100%;

		&:active,
		&:focus {
			border-color: ${theme.inputBorderColorFocus};
			box-shadow: ${theme.inputBoxShadowFocus};
		}
	`;

	const focusStyles = css`
		border-color: ${theme.inputBorderColorFocus};
		box-shadow: ${theme.inputBoxShadowFocus};
	`;

	const seamlessStyles = css`
		background-color: transparent;
		border-color: transparent;

		&:active {
			border-color: ${isDark
				? theme.controlBorderColorDark
				: theme.controlBorderColor};
			box-shadow: none;
		}
	`;

	const seamlessFocusStyles = css`
		border-color: ${isDark
			? theme.controlBorderColorDark
			: theme.controlBorderColor};
		box-shadow: none;
	`;

	const inputStyles = css`
		background: transparent;
		border: none;
		color: currentColor;
		display: block;
		line-height: ${theme.inputLineHeight};
		min-height: ${theme.inputHeight};
		outline: none;
		padding-bottom: ${theme.inputPadding};
		padding-top: ${theme.inputPadding};
		width: 100%;
	`;

	const darkStyles = css`
		background-color: ${theme.inputBackgroundColorDark};
		border-color: ${theme.inputBorderColorDark};
		color: ${theme.colorTextDark};
	`;

	const smallStyles = css`
		min-height: ${theme.inputHeightSmall};
		padding-bottom: ${theme.inputPaddingSmall};
		padding-top: ${theme.inputPaddingSmall};
	`;

	const largeStyles = css`
		min-height: ${theme.inputHeightLarge};
		padding-bottom: ${theme.inputPaddingLarge};
		padding-top: ${theme.inputPaddingLarge};
	`;

	const prefixSuffixStyles = css`
		line-height: ${theme.inputLineHeight};

		svg {
			display: block;
		}
	`;

	const classes = cx(
		baseStyles,
		isDark && darkStyles,
		isFocused && focusStyles,
		isSeamless && seamlessStyles,
		isSeamless && isFocused && seamlessFocusStyles,
		className,
		theme.platformStyles,
	);

	const inputClasses = cx(
		inputStyles,
		size === 'small' && smallStyles,
		size === 'large' && largeStyles,
		theme.platformStyles,
	);

	const prefixSuffixClasses = cx(prefixSuffixStyles);

	return (
		<Flex
			align={align}
			className={classes}
			gap={gap}
			justify={justify}
			onClick={handleOnRootClick}
			ref={forwardedRef}
		>
			{prefix && (
				<Flex.Item className={prefixSuffixClasses}>{prefix}</Flex.Item>
			)}
			<Flex.Block
				as="input"
				className={inputClasses}
				onBlur={handleOnBlur}
				onFocus={handleOnFocus}
				ref={inputRef}
				{...props}
			/>
			{suffix && (
				<Flex.Item className={prefixSuffixClasses}>{suffix}</Flex.Item>
			)}
		</Flex>
	);
}

export default platformConnect('TextField', TextField);
