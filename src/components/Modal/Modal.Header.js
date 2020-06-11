import React from 'react';
import { css, cx } from 'emotion';
import { platformConnect } from '../PlatformProvider';
import { useTheme } from '../../css';
import Button from '../Button';
import Card from '../Card';
import View from '../View';
import { useModalContext } from './Modal.Context';

function ModalHeader({
	children,
	closeLabel = 'Close',
	className,
	forwardedRef,
	title,
	showCloseLabel = true,
	...props
}) {
	const baseStyles = css``;

	const classes = cx(baseStyles, className);

	return (
		<Card.Header className={classes} ref={forwardedRef} {...props}>
			{children}
			<ModalTitle>{title}</ModalTitle>
			<ModalCloseButton
				closeLabel={closeLabel}
				showCloseLabel={showCloseLabel}
			/>
		</Card.Header>
	);
}

function ModalTitle({ children }) {
	if (!children) return;

	const baseStyles = css`
		position: absolute;
		left: 50%;
		transform: translate(-50%, -50%);
		top: 50%;
		font-weight: 600;
		line-height: 1;
		max-width: 60%;
		margin: 0;
	`;

	return <View className={baseStyles}>{children}</View>;
}

function ModalCloseButton({ closeLabel = 'Close', showCloseLabel }) {
	const { dialog } = useModalContext();
	const { space } = useTheme();

	if (!showCloseLabel) return null;

	const baseStyles = css`
		position: absolute;
		right: ${space(2)};
		transform: translate(0, -50%);
		top: 50%;
	`;

	return (
		<View className={baseStyles}>
			<Button variant="link" isNarrow onClick={dialog.hide}>
				{closeLabel}
			</Button>
		</View>
	);
}

export default platformConnect('ModalHeader', ModalHeader);
