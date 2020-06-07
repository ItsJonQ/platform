import React from 'react';
import { FiSearch } from 'react-icons/fi';
import TextField from '../TextField';
import PlatformProvider from '../../PlatformProvider';
import Spacer from '../../Spacer';

import { noop } from '../../../utils';

export default {
	title: 'TextField',
	component: TextField,
};

export const _default = () => (
	<PlatformProvider theme={{ isDark: true }}>
		<Spacer>
			<TextField onChange={noop} placeholder="TextField" size="small" />
		</Spacer>
		<Spacer>
			<TextField
				prefix={<FiSearch size={16} />}
				onChange={noop}
				isRounded
				placeholder="TextField + Prefix Search Icon"
				size="small"
			/>
		</Spacer>
		<Spacer>
			<TextField
				prefix={<FiSearch size={16} />}
				onChange={noop}
				isRounded
				isSeamless
				placeholder="TextField + Prefix Search Icon"
				size="small"
			/>
		</Spacer>
	</PlatformProvider>
);
