import React from 'react';
import { css, cx } from 'emotion';
import { MenuItem } from 'reakit/Menu';
import { platformConnect } from '../PlatformProvider';
import Flex from '../Flex';
import { useSurfaceStyles } from '../Surface';
import { noop } from '../../utils';
import { useTheme } from '../../css';
import { useControlListContext } from './ControlList.Context';
import Action from './ControlList.Action';
import Separator from './ControlList.Separator';

function ControlListIconWrapper({
	children,
	className,
	forwardedRef,
	...props
}) {
	const baseStyles = css`
		display: flex;
		align-items: center;
		justify-content: center;
		height: 24px;
		width: 24px;
	`;
	const classes = cx(baseStyles, className);

	return (
		<Flex.Item className={classes} ref={forwardedRef} {...props}>
			{children}
		</Flex.Item>
	);
}

function ControlListItem({
	checked,
	className,
	forwardedRef,
	icon,
	nextLabel,
	onChange = noop,
	type = 'switch',
	...props
}) {
	const { isDark, breakpoint, space } = useTheme();
	const { menu } = useControlListContext();
	const surfaceStyles = useSurfaceStyles();

	const baseStyles = css`
		min-height: 40px;
		outline: none;
		padding: ${space(2)} ${space(2)} ${space(2)} ${space(4)};
		position: relative;
		transition: background-color 120ms linear;

		&:active {
			background-color: rgba(0, 0, 0, 0.04);
			user-select: none;
		}

		&:focus {
			background-color: rgba(0, 0, 0, 0.04);
		}

		&:last-child {
			border-bottom: none;
		}

		${breakpoint('md')`
			padding: ${space(2)} ${space(4)};

			&:first-child {
				border-top-left-radius: 8px;
				border-top-right-radius: 8px;
			}

			&:last-child {
				border-bottom-left-radius: 8px;
				border-bottom-right-radius: 8px;
			}
		`};

		${isDark &&
		css`
			&:focus {
				background-color: rgba(255, 255, 255, 0.02);
			}

			&:active {
				background-color: rgba(0, 0, 0, 0.1);
			}
		`}
	`;

	const classes = cx(surfaceStyles, baseStyles, className);

	const leftComponent = icon && (
		<ControlListIconWrapper>{icon}</ControlListIconWrapper>
	);
	const rightComponent = (
		<Action
			checked={checked}
			onChange={onChange}
			label={nextLabel}
			type={type}
		/>
	);

	return (
		<MenuItem
			{...props}
			{...menu}
			as={Flex}
			className={classes}
			focusable
			gap={2}
			ref={forwardedRef}
		>
			{leftComponent}
			<Flex.Block>Hello</Flex.Block>
			{rightComponent}
			<Separator hasIcon={!!icon} />
		</MenuItem>
	);
}

export default platformConnect('ControlListItem', ControlListItem);
