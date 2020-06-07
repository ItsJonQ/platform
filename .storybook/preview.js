import React, { useState } from 'react';
import { addDecorator } from '@storybook/react';
import { PlatformProvider, Spacer } from '../src/components';

function PlatformStoryDecorator(storyFn) {
	const [isDark, setIsDark] = useState(true);

	return (
		<PlatformProvider theme={{ isDark }}>
			<Spacer>
				<button onClick={() => setIsDark(!isDark)}>
					Toggle Dark Mode
				</button>
			</Spacer>
			{storyFn()}
		</PlatformProvider>
	);
}

addDecorator(PlatformStoryDecorator);
