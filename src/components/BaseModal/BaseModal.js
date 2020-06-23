import React from 'react';
import { css, cx } from 'emotion';
import { Portal } from 'reakit/Portal';
import { useDialogState, Dialog, DialogBackdrop } from 'reakit/Dialog';
import { ModalContext, useModalState } from './BaseModal.Context';
import { platformConnect } from '../PlatformProvider';
import View from '../View';
import { useTheme } from '../../css';
import { is } from '../../utils';

function BaseModal({
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
	const { space } = useTheme();
	const dialog = useDialogState({ animated: true, visible });
	const { isUnderLayer } = useModalState(dialog);

	const backdropTransition = `opacity ${backdropTransitionDuration}ms
    ${transitionTimingFunction}`;

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

	const contextProps = {
		dialog,
	};

	const dialogProps = {
		...props,
		...dialog,
	};

	if (isUnderLayer) {
		dialogProps['data-underlayer'] = '';
	}

	return (
		<ModalContext.Provider value={contextProps}>
			{is.function(renderTrigger) ? renderTrigger(dialog) : renderTrigger}
			<Portal>
				<DialogBackdrop {...dialog} className={cx(backdropStyles)}>
					<View className={dialogWrapperStyles}>
						<Dialog
							aria-label={label}
							tabIndex={0}
							className={className}
							ref={forwardedRef}
							{...dialogProps}
						>
							{children}
						</Dialog>
					</View>
				</DialogBackdrop>
			</Portal>
		</ModalContext.Provider>
	);
}

export default platformConnect('BaseModal', BaseModal);
