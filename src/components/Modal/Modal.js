import React from 'react';
import { useDialogState, Dialog, DialogBackdrop } from 'reakit/Dialog';
import { Portal } from 'reakit/Portal';
import { css, cx } from 'emotion';
import { ModalContext } from './Modal.Context';
import { platformConnect } from '../PlatformProvider';
import { useTheme } from '../../css';
import Card from '../Card';
import View from '../View';
import { is } from '../../utils';

import { useModalState } from './Modal.Context';
import ModalHeader from './Modal.Header';
import ModalFooter from './Modal.Footer';
import ModalTrigger from './Modal.Trigger';

export { useModalContext } from './Modal.Context';

const MODAL_SIZES = {
	lg: 720,
	md: 500,
	sm: 400,
};

function Modal({
	children,
	className,
	forwardedRef,
	label = 'Modal',
	transitionTimingFunction = 'ease-in-out',
	transitionDuration = 200,
	backdropTransitionDuration = 250,
	size = 'md',
	visible = false,
	renderTrigger = null,
	zIndex = 999,
	...props
}) {
	const { breakpoint, space } = useTheme();
	const dialog = useDialogState({ animated: true, visible });
	const { isUnderLayer } = useModalState(dialog);

	const maxWidth = MODAL_SIZES[size] || MODAL_SIZES.md;

	const modalTransition = `
	opacity ${transitionDuration}ms ${transitionTimingFunction},
			transform ${transitionDuration}ms ${transitionTimingFunction}
	`;
	const backdropTransition = `opacity ${backdropTransitionDuration}ms
	${transitionTimingFunction}`;

	const baseStyles = css`
		left: 50%;
		width: 100%;
		opacity: 0;
		outline: none;
		perspective: 800px;
		position: relative;
		transform-origin: top center;
		transform: translate3d(-50%, ${space(5)}, 0);
		transition: ${modalTransition};
		max-width: 100%;
		top: ${space(4)};

		@media (min-height: 40em) {
			top: ${space(4)};
		}

		${breakpoint('md')`
			max-width: ${maxWidth}px;
			position: absolute;
			top: 16%;
		`}

		&[data-enter] {
			opacity: 1;
			transform: translate3d(-50%, 0, 0);

			${isUnderLayer &&
			css`
				transform: translate3d(-50%, -10px, 0) scale(0.95);
				transform-origin: top center;
			`}
		}
	`;

	const backdropStyles = css`
		background: rgba(0, 0, 0, 0.5);
		bottom: 0;
		left: 0;
		opacity: 0;
		overflow-y: auto;
		padding: ${space(4)};
		perspective: 800px;
		position: fixed;
		right: 0;
		top: 0;
		transition: ${backdropTransition};
		z-index: ${zIndex};

		&[data-enter] {
			opacity: 1;
		}
	`;

	const dialogWrapperStyles = css`
		position: absolute;
		top: ${space(4)};
		bottom: ${space(4)};
		left: ${space(4)};
		right: ${space(4)};
	`;

	const classes = cx(baseStyles, className);

	const contextProps = {
		dialog,
	};

	return (
		<ModalContext.Provider value={contextProps}>
			{is.function(renderTrigger) ? renderTrigger(dialog) : renderTrigger}
			<Portal>
				<DialogBackdrop {...dialog} className={cx(backdropStyles)}>
					<View className={dialogWrapperStyles}>
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
							{children}
						</Dialog>
					</View>
				</DialogBackdrop>
			</Portal>
		</ModalContext.Provider>
	);
}

const ConnectedComponent = platformConnect('Modal', Modal);
ConnectedComponent.Body = Card.Body;
ConnectedComponent.Header = ModalHeader;
ConnectedComponent.Footer = ModalFooter;
ConnectedComponent.Trigger = ModalTrigger;

export default ConnectedComponent;
