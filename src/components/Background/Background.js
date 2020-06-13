import React from 'react';
import { css, cx } from 'emotion';
import { platformConnect } from '../PlatformProvider';
import View from '../View';
import { useTheme } from '../../css';

export function useBackgroundStyles() {
	const { isDark, ...theme } = useTheme();

	const baseStyles = css`
		background-color: ${theme.surfaceBackgroundBackgroundColor};

		${isDark &&
		css`
			background-color: ${theme.surfaceBackgroundBackgroundColorDark};
		`}
	`;

	return baseStyles;
}

function Background({ className, forwardedRef, ...props }) {
	const baseStyles = useBackgroundStyles();

	const classes = cx(baseStyles, className);

	return <View className={classes} ref={forwardedRef} {...props} />;
}

export default platformConnect('Background', Background);
