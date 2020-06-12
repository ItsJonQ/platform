import React from 'react';
import { css, cx } from 'emotion';
import { platformConnect } from '../PlatformProvider';
import Surface from '../Surface';
import { useTheme } from '../../css';
import ListItem from './ControlList.Item';

function ControlList({ className, forwardedRef, ...props }) {
	const { breakpoint } = useTheme();

	const baseStyles = css`
		margin: 0 auto;
		max-width: 600px;
		padding: 0;
		width: 100%;

		${breakpoint('md')`
			border-radius: 8px;
			overflow: hidden;
		`};
	`;

	const classes = cx(baseStyles, className);

	return (
		<Surface className={classes} {...props}>
			<ListItem />
			<ListItem type="next" />
			<ListItem />
		</Surface>
	);
}

export default platformConnect('ControlList', ControlList);
