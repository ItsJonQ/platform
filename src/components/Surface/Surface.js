import React from 'react';
import { css, cx } from 'emotion';
import { platformConnect } from '../PlatformProvider';
import View from '../View';
import { useTheme } from '../../css';

function Surface({ className, forwardedRef, ...props }) {
	const { isDark, ...theme } = useTheme();

	const baseStyles = css`
		background-color: ${theme.cardBackgroundColor};
		color: ${theme.colorText};
		position: relative;
	`;

	const darkStyles = css`
		background-color: ${theme.cardBackgroundColorDark};
		color: ${theme.colorTextDark};
	`;

	const classes = cx(baseStyles, isDark && darkStyles, className);

	return <View className={classes} ref={forwardedRef} {...props} />;
}

export default platformConnect('Surface', Surface);
