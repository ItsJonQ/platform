import React from 'react';
import { FiPlus } from 'react-icons/fi';
import Card from '../../Card';
import ContextMenu from '../ContextMenu';
import Spacer from '../../Spacer';

export default {
	title: 'ContextMenu',
	component: ContextMenu,
};

export const _default = () => (
	<>
		<Spacer>
			<ContextMenu>
				<div style={{ height: 400 }}>
					<img
						src="https://images.unsplash.com/photo-1592922823354-c48e6d894bbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
						alt="Squier"
						style={{
							maxWidth: '100%',
							width: '100%',
							height: '100%',
							pointerEvents: 'none',
							objectFit: 'cover',
						}}
					/>
				</div>
				<Card.Body>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Nullam gravida ante id velit facilisis tincidunt. Sed
					convallis faucibus mollis. Aliquam sed nisi risus.
					Pellentesque sit amet erat non lorem vestibulum vestibulum
					ut quis augue. Cras non lacus at ante ultrices efficitur.
					Duis pretium placerat nisl at scelerisque.
				</Card.Body>
			</ContextMenu>
		</Spacer>
	</>
);
