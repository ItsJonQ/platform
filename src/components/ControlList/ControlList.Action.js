import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { platformConnect } from '../PlatformProvider';
import Switch from '../Switch';
import { noop } from '../../utils';

function ControlListAction({
	checked,
	className,
	id,
	onChange = noop,
	type = 'switch',
	...props
}) {
	switch (type) {
		case 'switch':
			return <Switch checked={checked} onChange={onChange} id={id} />;
		case 'next':
			return <FiChevronRight size={20} />;
		default:
			return null;
	}
}

export default platformConnect('ControlListAction', ControlListAction);
