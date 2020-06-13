import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { platformConnect } from '../PlatformProvider';
import Switch from '../Switch';
import Flex from '../Flex';
import Icon from '../Icon';
import Text from '../Text';
import { noop } from '../../utils';

function ControlListAction({
	checked,
	className,
	forwardedRef,
	label,
	onChange = noop,
	type = 'switch',
	...props
}) {
	let innerComponent;

	switch (type) {
		case 'switch':
			innerComponent = <Switch checked={checked} onChange={onChange} />;
			break;
		case 'next':
			innerComponent = (
				<Flex gap={1}>
					{label && <Text variant="muted">{label}</Text>}
					<Text variant="muted">
						<Icon icon={<FiChevronRight />} />
					</Text>
				</Flex>
			);
			break;
		default:
			innerComponent = null;
	}

	if (!innerComponent) return null;

	return (
		<Flex.Item ref={forwardedRef} {...props}>
			{innerComponent}
		</Flex.Item>
	);
}

export default platformConnect('ControlListAction', ControlListAction);
