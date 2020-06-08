import React, { useState } from 'react';
import { addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { PlatformProvider, Button, Spacer } from '../src/components';

function PlatformStoryDecorator(storyFn) {
	const [isDark, setIsDark] = useState(true);

	return (
		<PlatformProvider theme={{ isDark }}>
			<Spacer pb={10}>
				<Button onClick={() => setIsDark(!isDark)}>
					Toggle Dark Mode
				</Button>
			</Spacer>
			{storyFn()}
		</PlatformProvider>
	);
}

addDecorator(PlatformStoryDecorator);
addDecorator(withKnobs);
