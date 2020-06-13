import React, { forwardRef } from 'react';

function View(
	{
		__internal_baseComponent: BaseComponent,
		as = 'div',
		className,
		children,
		forwardedRef,
		...props
	},
	ref,
) {
	const componentProps = {
		className,
		ref: forwardedRef || ref,
		...props,
	};

	if (BaseComponent) {
		return (
			<BaseComponent as={as} {...componentProps}>
				{children}
			</BaseComponent>
		);
	}

	return React.createElement(as, componentProps, children);
}

const ForwardedComponent = forwardRef(View);

export default ForwardedComponent;
