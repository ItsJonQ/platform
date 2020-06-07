import React from 'react';
import { css, cx } from 'emotion';
import { platformConnect } from '../PlatformProvider';
import { useTheme } from '../../css';

function IconButton({ className, children, forwardedRef, ...props }) {
	const { isDark, platformStyles, ...theme } = useTheme();

	const baseStyles = css`
		align-items: center;
		appearance: none;
		background-color: ${theme.iconControlBackgroundColor};
		border-radius: ${theme.iconControlBorderRadius};
		border: none;
		color: ${theme.colorText};
		cursor: pointer;
		display: flex;
		height: ${theme.iconControlSize};
		justify-content: center;
		outline: none;
		padding: ${theme.iconControlPadding};
		transform: ${theme.iconControlTransform};
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

	const darkStyles = css`
		background-color: ${theme.iconControlBackgroundColorDark};
		color: ${theme.colorTextDark};

		&:hover,
		&:focus {
			background-color: ${theme.iconControlBackgroundColorHoverDark};
		}
	`;

	const classes = cx(
		baseStyles,
		isDark && darkStyles,
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
