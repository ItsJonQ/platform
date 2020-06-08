import React from 'react';
import {
	FiBell,
	FiMessageCircle,
	FiMoreHorizontal,
	FiMenu,
	FiKey,
} from 'react-icons/fi';
import {
	Button,
	Flex,
	IconButton,
	SearchInput,
	Spacer,
} from '../src/components';

export default {
	title: 'Sandbox',
};

export const _default = () => (
	<>
		<Spacer>
			<Flex gap={2}>
				<Flex.Item>
					<IconButton variant="tertiary">
						<FiMenu size={20} />
					</IconButton>
				</Flex.Item>
				<Flex.Block minWidth={240} maxWidth={600}>
					<SearchInput
						elevation={2}
						placeholder="Search for..."
						size="large"
					/>
				</Flex.Block>
				<Flex.Block />
				<Flex.Item>
					<Button size="large" variant="link">
						Clear
					</Button>
				</Flex.Item>
				<Flex.Item>
					<Button
						prefix={<FiKey />}
						size="large"
						variant="secondary"
						isOutline
					>
						Keys
					</Button>
				</Flex.Item>
				<Flex.Item>
					<Button size="large">Control</Button>
				</Flex.Item>
				<Flex.Item>
					<Button size="large" variant="primary">
						Create
					</Button>
				</Flex.Item>
				<Flex.Item>
					<IconButton>
						<FiMessageCircle size={20} />
					</IconButton>
				</Flex.Item>
				<Flex.Item>
					<IconButton>
						<FiBell size={20} />
					</IconButton>
				</Flex.Item>
				<Flex.Item>
					<IconButton>
						<FiMoreHorizontal size={20} />
					</IconButton>
				</Flex.Item>
			</Flex>
		</Spacer>
		<Spacer pt={20}>
			<Spacer pb={1}>
				<Button isBlock prefix={<FiKey />}>
					Label
				</Button>
			</Spacer>
			<Spacer pb={0}>
				<Button variant="primary" isBlock>
					Create
				</Button>
			</Spacer>
		</Spacer>
	</>
);
