import React from 'react';
import SearchInput from '../SearchInput';
import Spacer from '../../Spacer';

import { noop } from '../../../utils';

export default {
	title: 'SearchInput',
	component: SearchInput,
};

export const _default = () => (
	<>
		<Spacer p={10}>
			<SearchInput onChange={noop} placeholder="Search..." />
		</Spacer>
	</>
);
