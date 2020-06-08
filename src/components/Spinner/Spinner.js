import React from 'react';
import { css, cx } from 'emotion';
import { platformConnect } from '../PlatformProvider';
import View from '../View';
import { useTheme } from '../../css';
import { toPx } from '../../utils';

const BASE_SIZE = 16;
const WRAPPER_SIZE = 36;

function Spinner({
	color,
	className,
	forwardedRef,
	size = BASE_SIZE,
	...props
}) {
	const { isDark, ...theme } = useTheme();

	const ratio = size / BASE_SIZE;
	const scale = (ratio * BASE_SIZE) / WRAPPER_SIZE;
	const transform = `scale(${scale})`;

	const baseColor = isDark ? theme.colorTextDark : theme.colorText;
	const spinnerColor = color || baseColor;

	const baseStyles = css`
		display: flex;
		height: ${toPx(size)};
		pointer-events: none;
		position: relative;
		width: ${toPx(size)};
	`;

	const wrapperStyles = css`
		height: ${toPx(WRAPPER_SIZE)};
		left: 0;
		opacity: ${theme.spinnerOpacity};
		position: absolute;
		top: 0;
		transform-origin: top left;
		width: ${toPx(WRAPPER_SIZE)};
	`;

	const innerBarWrapperStyles = css`
		color: ${spinnerColor};
		display: inline-flex;
		height: 54px;
		left: 50%;
		padding: 10px;
		position: absolute;
		top: 50%;
		transform: translate(-50%, -50%);
		width: 54px;

		> div {
			animation: PlatformUISpinnerFadeAnimation
				${theme.spinnerAnimationDuration} linear infinite;
			background: currentColor;
			border-radius: 50px;
			height: 16%;
			left: 49%;
			opacity: 0;
			position: absolute;
			top: 43%;
			width: 6%;
		}

		@keyframes PlatformUISpinnerFadeAnimation {
			from {
				opacity: 1;
			}
			to {
				opacity: 0.25;
			}
		}

		.InnerBar1 {
			transform: rotate(0deg) translate(0, -130%);
			animation-delay: 0s;
		}

		.InnerBar2 {
			transform: rotate(30deg) translate(0, -130%);
			animation-delay: -0.9167s;
		}

		.InnerBar3 {
			transform: rotate(60deg) translate(0, -130%);
			animation-delay: -0.833s;
		}
		.InnerBar4 {
			transform: rotate(90deg) translate(0, -130%);
			animation-delay: -0.7497s;
		}
		.InnerBar5 {
			transform: rotate(120deg) translate(0, -130%);
			animation-delay: -0.667s;
		}
		.InnerBar6 {
			transform: rotate(150deg) translate(0, -130%);
			animation-delay: -0.5837s;
		}
		.InnerBar7 {
			transform: rotate(180deg) translate(0, -130%);
			animation-delay: -0.5s;
		}
		.InnerBar8 {
			transform: rotate(210deg) translate(0, -130%);
			animation-delay: -0.4167s;
		}
		.InnerBar9 {
			transform: rotate(240deg) translate(0, -130%);
			animation-delay: -0.333s;
		}
		.InnerBar10 {
			transform: rotate(270deg) translate(0, -130%);
			animation-delay: -0.2497s;
		}
		.InnerBar11 {
			transform: rotate(300deg) translate(0, -130%);
			animation-delay: -0.167s;
		}
		.InnerBar12 {
			transform: rotate(330deg) translate(0, -130%);
			animation-delay: -0.0833s;
		}
	`;

	const classes = cx(baseStyles, className);
	const styles = { transform };

	return (
		<View className={classes} ref={forwardedRef} {...props}>
			<View
				className={cx(wrapperStyles)}
				ref={forwardedRef}
				style={styles}
				{...props}
			>
				<View className={cx(innerBarWrapperStyles)}>
					<div className="InnerBar1" />
					<div className="InnerBar2" />
					<div className="InnerBar3" />
					<div className="InnerBar4" />
					<div className="InnerBar5" />
					<div className="InnerBar6" />
					<div className="InnerBar7" />
					<div className="InnerBar8" />
					<div className="InnerBar9" />
					<div className="InnerBar10" />
					<div className="InnerBar11" />
					<div className="InnerBar12" />
				</View>
			</View>
		</View>
	);
}

export default platformConnect('Spinner', Spinner);
