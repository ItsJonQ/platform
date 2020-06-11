import React from 'react';
import Modal from '../Modal';

export default {
	title: 'Modal',
	component: Modal,
};

export const _default = () => {
	return (
		<Modal>
			<Modal.Header title={'Modal Title'} />
			<Modal.Body>
				<h2>First</h2>
				<Modal>
					<Modal.Header title={'Inner Modal Title'} />
					<Modal.Body>
						<h2>Second</h2>
					</Modal.Body>
				</Modal>
			</Modal.Body>
		</Modal>
	);
};
