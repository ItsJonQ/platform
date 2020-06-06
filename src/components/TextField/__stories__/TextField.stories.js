import React from 'react';

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
			<TextField onChange={noop} placeholder="Small" size="small" />
		</Spacer>
		<Spacer>
			<TextField onChange={noop} placeholder="Default" />
		</Spacer>
		<TextField onChange={noop} placeholder="Large" size="large" />
	</PlatformProvider>
);
