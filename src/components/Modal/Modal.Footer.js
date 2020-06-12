import React from 'react';
import { platformConnect } from '../PlatformProvider';
import Card from '../Card';

function ModalFooter({
	children,
	forwardedRef,
	justify = 'flex-end',
	...props
}) {
	return (
		<Card.Footer ref={forwardedRef} justify={justify} {...props}>
			{children}
		</Card.Footer>
	);
}

export default platformConnect('ModalFooter', ModalFooter);
