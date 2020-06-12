import React from 'react';
import { css, cx } from 'emotion';
import { platformConnect } from '../PlatformProvider';
import View from '../View';
import { useTheme } from '../../css';

function ControlListContainer({ className, forwardedRef, ...props }) {
	const { isDark, ...theme } = useTheme();

	const baseStyles = css`
		background-color: ${theme.surfaceContainerBackground};

		${isDark &&
		css`
			background-color: ${theme.surfaceContainerBackgroundDark};
		`}
	`;

	const classes = cx(baseStyles, className);

	return <View className={classes} ref={forwardedRef} {...props} />;
}

export default platformConnect('ControlListContainer', ControlListContainer);
