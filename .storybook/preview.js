import React, { useState } from 'react';
import { addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import {
	PlatformProvider,
	Flex,
	Spacer,
	Switch,
	Text,
} from '../src/components';

function PlatformStoryDecorator(storyFn) {
	const [isDark, setIsDark] = useState(false);

	return (
		<PlatformProvider theme={{ isDark }}>
			<Spacer pb={10}>
				<Flex style={{ maxWidth: 180 }}>
					<Flex.Item>
						<Text>
							<strong>Dark Mode</strong>
						</Text>
					</Flex.Item>
					<Flex.Item>
						<Switch checked={isDark} onChange={setIsDark} />
					</Flex.Item>
				</Flex>
			</Spacer>
			{storyFn()}
		</PlatformProvider>
	);
}

addDecorator(PlatformStoryDecorator);
addDecorator(withKnobs);
