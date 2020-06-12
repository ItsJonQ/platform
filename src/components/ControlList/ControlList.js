import React from 'react';
import { css, cx } from 'emotion';
import { platformConnect } from '../PlatformProvider';
import Flex from '../Flex';
import Surface from '../Surface';
import Switch from '../Switch';
import View from '../View';
import { useUniqueId, noop } from '../../utils';
import { useTheme } from '../../css';

function ControlListItemSeparator({ className, ...props }) {
	const { isDark, breakpoint, space } = useTheme();

	const baseStyles = css`
		border-bottom: 1px solid rgba(0, 0, 0, 0.1);
		position: absolute;
		bottom: 0;
		left: ${space(4)};
		right: 0;
		margin: 0 !important;

		*:last-child > & {
			border-bottom: none;
		}

		${breakpoint('md')`
			left: ${space(4)};
			right: ${space(4)};
		`};

		${isDark &&
		css`
			border-bottom: 1px solid rgba(255, 255, 255, 0.1);
		`}
	`;

	const classes = cx(baseStyles, className);

	return <View aria-hidden="true" className={classes} {...props} />;
}

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
			background-color: rgba(0, 0, 0, 0.06);
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

	const actionRight = type === 'switch' && (
		<Flex.Item>
			<Switch checked={checked} onChange={onChange} id={switchId} />
		</Flex.Item>
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
			<ControlListItemSeparator />
		</Surface>
	);
}

function ControlList({ className, forwardedRef, ...props }) {
	const { breakpoint } = useTheme();

	const baseStyles = css`
		padding: 0;

		${breakpoint('md')`
			border-radius: 8px;
			overflow: hidden;
		`};
	`;

	const classes = cx(baseStyles, className);

	return (
		<Surface className={classes} {...props}>
			<ControlListItem />
			<ControlListItem />
			<ControlListItem />
		</Surface>
	);
}

export default platformConnect('ControlList', ControlList);
