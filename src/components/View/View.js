import React, { forwardRef } from 'react';
import { cx } from 'emotion';
import { useTheme } from '../../css';

function View(
	{
		__internal_baseComponent: BaseComponent,
		as = 'div',
		className,
		children,
		...props
	},
	ref,
) {
	const { platformStyles } = useTheme();
	const classes = cx(platformStyles, className);
	const componentProps = {
		className: classes,
		ref,
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
