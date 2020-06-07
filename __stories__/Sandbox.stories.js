import React from 'react';
import {
	FiBell,
	FiMessageCircle,
	FiMoreHorizontal,
	FiSearch,
	FiMenu,
} from 'react-icons/fi';
import { Flex, IconButton, Spacer, TextField } from '../src/components';

export default {
	title: 'Sandbox',
};

export const _default = () => (
	<>
		<Spacer>
			<Flex gap={2}>
				<Flex.Item>
					<IconButton>
						<FiMenu size={20} />
					</IconButton>
				</Flex.Item>
				<Flex.Block minWidth={240} maxWidth={600}>
					<TextField
						isRounded
						prefix={<FiSearch size={16} />}
						placeholder="Search for..."
						size="large"
					/>
				</Flex.Block>
				<Flex.Block />
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
	</>
);
