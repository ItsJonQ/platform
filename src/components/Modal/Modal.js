import React from 'react';
import {
	useDialogState,
	Dialog,
	DialogBackdrop,
	DialogDisclosure,
} from 'reakit/Dialog';
import { Portal } from 'reakit/Portal';
import { css, cx } from 'emotion';
import { platformConnect } from '../PlatformProvider';
import Button from '../Button';
import Card from '../Card';

function Modal({
	className,
	forwardedRef,
	label,
	visible = true,
	zIndex = 999,
	...props
}) {
	const dialog = useDialogState({ visible });
	const baseStyles = css`
		perspective: 800px;
		position: aboslute;
		top: 28px;
		left: 50%;
		display: inline-flex;
		max-height: calc(100vh - 56px);
		transform: translate3d(-50%, 0, 0);
		outline: none;
	`;

	const backdropStyles = css`
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(0, 0, 0, 0.5);
		perspective: 800px;
		z-index: ${zIndex};
	`;

	const classes = cx(baseStyles, className);

	return (
		<>
			<DialogDisclosure {...dialog} as={Button}>
				Open
			</DialogDisclosure>
			<Portal>
				<DialogBackdrop {...dialog} className={cx(backdropStyles)}>
					<Dialog
						aria-label={label}
						tabIndex={0}
						as={Card}
						elevation={4}
						className={classes}
						ref={forwardedRef}
						{...props}
						{...dialog}
					>
						<Card.Body>dsadsadsadsadsadsad</Card.Body>
					</Dialog>
				</DialogBackdrop>
			</Portal>
		</>
	);
}

const ConnectedComponent = platformConnect('Modal', Modal);
ConnectedComponent.Body = Card.Body;
ConnectedComponent.Header = Card.Header;
ConnectedComponent.Footer = Card.Footer;

export default ConnectedComponent;
