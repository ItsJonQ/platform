import React from 'react';
import Button from '../../Button';
import Modal, { useModalContext } from '../Modal';

export default {
	title: 'Modal',
	component: Modal,
};

function CloseButton({ children = 'Done', variant = 'primary' }) {
	const { dialog } = useModalContext();

	return (
		<Button onClick={dialog.hide} variant={variant}>
			{children}
		</Button>
	);
}

export const _default = () => {
	return (
		<Modal visible renderTrigger={<Modal.Trigger>Open</Modal.Trigger>}>
			<Modal.Header title={'Modal Title'} />
			<Modal.Body>
				<h2>First</h2>
				<Modal renderTrigger={<Modal.Trigger>Open</Modal.Trigger>}>
					<Modal.Header title={'Inner Modal Title'} />
					<Modal.Body>
						<h2>Second</h2>
						<Modal
							renderTrigger={<Modal.Trigger>Open</Modal.Trigger>}
						>
							<Modal.Header title={'Third Inner Modal Title'} />
							<Modal.Body>
								<h2>Third</h2>
							</Modal.Body>
							<Modal.Footer>
								<CloseButton />
							</Modal.Footer>
						</Modal>
					</Modal.Body>
				</Modal>
			</Modal.Body>
		</Modal>
	);
};
