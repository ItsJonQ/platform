import React from 'react';
import { Global, css } from '@emotion/core';
import { useTheme } from '../../css';

function GlobalStyles() {
	const { colorBodyBackground, colorBodyBackgroundDark, isDark } = useTheme();

	const styles = css`
		:root {
			--platformUIBodyBackgroundColor: ${isDark
				? colorBodyBackgroundDark
				: colorBodyBackground};
		}

		html {
			background-color: var(--platformUIBodyBackgroundColor);
		}
	`;

	return <Global styles={styles} />;
}

export default GlobalStyles;
