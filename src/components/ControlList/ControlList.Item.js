import React from 'react';
import { css, cx } from 'emotion';
import { platformConnect } from '../PlatformProvider';
import Flex from '../Flex';
import Surface from '../Surface';
import { useUniqueId, noop } from '../../utils';
import { useTheme } from '../../css';

import Action from './ControlList.Action';
import Separator from './ControlList.Separator';

function ControlListItem({
	checked,
	className,
	onChange = noop,
	type = 'switch',
	...props
}) {
	const { isDark, breakpoint, space } = useTheme();
	const id = useUniqueId(ControlListItem, 'control-list-item', props.id);
	const switchId = `${id}-switch`;

	const baseStyles = css`
		padding: ${space(2)} ${space(2)} ${space(2)} ${space(4)};
		position: relative;
		min-height: 40px;
		transition: background-color 120ms linear;

		&:active {
			background-color: rgba(0, 0, 0, 0.04);
			user-select: none;
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
			&:active {
				background-color: rgba(0, 0, 0, 0.1);
			}
		`}
	`;

	const classes = cx(baseStyles, className);

	const actionRight = (
		<Action
			checked={checked}
			onChange={onChange}
			id={switchId}
			type={type}
		/>
	);

	const asComponent = type === 'switch' ? 'label' : props.as;

	return (
		<Surface
			as={asComponent}
			className={classes}
			htmlFor={switchId}
			{...props}
			__internal_baseComponent={Flex}
		>
			<Flex.Block>Hello</Flex.Block>
			{actionRight}
			<Separator />
		</Surface>
	);
}

export default platformConnect('ControlListItem', ControlListItem);
