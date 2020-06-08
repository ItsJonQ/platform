import React from 'react';
import { css, cx } from 'emotion';
import { platformConnect } from '../PlatformProvider';
import { is, toPx } from '../../utils';
import { useTheme } from '../../css';
import View from '../View';

function Elevation({
	active,
	borderRadius = 'inherit',
	className,
	focus,
	forwardedRef,
	hover,
	isInteractive = true,
	offset = 0,
	value = 0,
	...props
}) {
	const theme = useTheme();
	const boxShadow = getBoxShadow(value);

	let hoverValue = is.defined(hover) ? hover : value * 2;
	let activeValue = is.defined(active) ? hover : value / 2;

	if (!isInteractive) {
		hoverValue = is.defined(hover) ? hover : undefined;
		activeValue = is.defined(active) ? active : undefined;
	}

	let hoverStyles;
	let focusStyles;
	let activeStyles;

	const baseStyles = css`
		background: transparent;
		box-shadow: ${boxShadow};
		border-radius: ${borderRadius};
		bottom: ${toPx(offset)};
		display: block;
		left: ${toPx(offset)};
		margin: 0 !important;
		pointer-events: none;
		position: absolute;
		right: ${toPx(offset)};
		top: ${toPx(offset)};
		transition: box-shadow ${theme.elevationTransitionDuration}
			${theme.elevationTransitionTimingFunction};
		will-change: box-shadow;
	`;

	if (is.defined(hoverValue)) {
		hoverStyles = css`
			*:hover > & {
				box-shadow: ${getBoxShadow(hoverValue)};
			}
		`;
	}

	if (is.defined(activeValue)) {
		activeStyles = css`
			*:active > & {
				box-shadow: ${getBoxShadow(activeValue)};
			}
		`;
	}

	if (is.defined(focus)) {
		focusStyles = css`
			*:focus > & {
				box-shadow: ${getBoxShadow(focus)};
			}
		`;
	}

	const classes = cx(
		baseStyles,
		hoverStyles,
		activeStyles,
		focusStyles,
		className,
	);

	return (
		<View
			aria-hidden="true"
			className={classes}
			ref={forwardedRef}
			{...props}
		/>
	);
}

function getBoxShadow(value) {
	const boxShadowColor = `rgba(0 ,0, 0, ${value / 20})`;
	const boxShadow = `0 ${toPx(value)} ${toPx(value * 2)} 0
	${boxShadowColor}`;

	return boxShadow;
}

export default platformConnect('Elevation', Elevation);
