import React from 'react';
import { css, cx } from 'emotion';
import { Checkbox } from 'reakit/Checkbox';
import { Radio } from 'reakit/Radio';
import { VisuallyHidden } from 'reakit/VisuallyHidden';
import { platformConnect } from '../PlatformProvider';
import View from '../View';
import { useTheme } from '../../css';
import { useControlledState } from '../../hooks';
import { useUniqueId, toPx, noop } from '../../utils';

const ControlComponent = {
	checkbox: Checkbox,
	radio: Radio,
};

function Switch({
	checked: checkedProp,
	className,
	disabled,
	forwardedRef,
	onChange = noop,
	label,
	size = 'medium',
	type = 'checkbox',
	...props
}) {
	const [checked, setChecked] = useControlledState(checkedProp, {
		initial: false,
	});
	const { isDark, platformStyles, ...theme } = useTheme();

	const toggle = (changeProps) => {
		setChecked(!checked);
		onChange(!checked, changeProps);
	};

	const id = useUniqueId(Switch, 'switch', props.id);

	const Control = ControlComponent[type] || Checkbox;

	const baseStyles = css`
		cursor: pointer;
		display: flex;
		height: ${theme.switchHeight};
		margin: 0;
		position: relative;
		user-select: none;
		width: ${theme.switchWidth};

		${disabled &&
		css`
			pointer-events: none;
			opacity: 0.6;
		`}
	`;

	const largeStyles = css`
		width: ${theme.switchWidthLarge};
		height: ${theme.switchHeightLarge};
	`;

	const smallStyles = css`
		width: ${theme.switchWidthSmall};
		height: ${theme.switchHeightSmall};
	`;

	const controlStyles = css`
		padding: 0;
		position: absolute;
		z-index: -1;
		opacity: 0;
	`;

	const classes = cx(
		baseStyles,
		size === 'large' && largeStyles,
		size === 'small' && smallStyles,
		className,
	);

	return (
		<label className={classes} htmlFor={id}>
			<Backdrop checked={checked} size={size} />
			<Toggle checked={checked} size={size} />
			<Control
				{...props}
				className={cx(controlStyles, platformStyles)}
				disabled={disabled}
				id={id}
				ref={forwardedRef}
				checked={checked}
				onChange={toggle}
			/>
			<VisuallyHidden>{label}</VisuallyHidden>
		</label>
	);
}

function Toggle({ checked, size = 'medium' }) {
	const theme = useTheme();
	const sizeOffset = toPx(theme.switchToggleOffset * 2);

	const baseStyles = css`
		background: ${theme.switchToggleColor};
		border-radius: calc(${theme.switchHeight} - ${sizeOffset});
		box-shadow: ${theme.switchToggleBoxShadow};
		height: calc(${theme.switchHeight} - ${sizeOffset});
		left: ${toPx(theme.switchToggleOffset)};
		pointer-events: none;
		position: absolute;
		top: ${toPx(theme.switchToggleOffset)};
		transform: translate(0, 0);
		transition: all ${theme.switchToggleTransitionDuration} linear;
		width: calc(${theme.switchHeight} - ${sizeOffset});

		*:active > & {
			width: ${theme.switchHeight};
		}

		${checked &&
		css`
			transform: translate(20px, 0);

			*:active > & {
				transform: translate(16px, 0);
			}
		`}
	`;

	const largeStyles = css`
		height: calc(${theme.switchHeightLarge} - ${sizeOffset});
		width: calc(${theme.switchHeightLarge} - ${sizeOffset});

		*:active > & {
			width: ${theme.switchHeightLarge};
		}
	`;

	const smallStyles = css`
		height: calc(${theme.switchHeightSmall} - ${sizeOffset});
		width: calc(${theme.switchHeightSmall} - ${sizeOffset});

		*:active > & {
			width: ${theme.switchHeightSmall};
		}

		${checked &&
		css`
			transform: translate(16px, 0);

			*:active > & {
				transform: translate(12px, 0);
			}
		`}
	`;

	const classes = cx(
		baseStyles,
		size === 'large' && largeStyles,
		size === 'small' && smallStyles,
	);

	return <View aria-hidden={true} className={classes} />;
}

function Backdrop({ checked }) {
	const { isDark, ...theme } = useTheme();

	const baseStyles = css`
		background-color: ${theme.switchBackgroundColor};
		border-radius: 999px;
		display: block;
		height: 100%;
		left: 0;
		pointer-events: none;
		pointer-events: none;
		position: absolute;
		top: 0;
		transition: all ${theme.switchTransitionDuration} linear;
		width: 100%;

		${isDark &&
		css`
			background-color: ${theme.switchBackgroundColorDark};
		`}

		${checked &&
		css`
			background-color: #34c759;
		`}
	`;

	return <View aria-hidden={true} className={baseStyles} />;
}

export default platformConnect('Switch', Switch);
