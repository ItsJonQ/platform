import React from 'react';
import { FiPlus } from 'react-icons/fi';
import IconButton from '../IconButton';
import Spacer from '../../Spacer';

export default {
	title: 'IconButton',
	component: IconButton,
};

export const _default = () => (
	<>
		<Spacer>
			<IconButton>
				<FiPlus size={20} />
			</IconButton>
		</Spacer>
	</>
);
