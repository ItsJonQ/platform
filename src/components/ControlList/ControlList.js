import React from 'react';
import { css, cx } from 'emotion';
import { FiAirplay } from 'react-icons/fi';
import { platformConnect } from '../PlatformProvider';
import Surface from '../Surface';
import { useTheme } from '../../css';
import { ControlListContextProvider } from './ControlList.Context';
import ListMenu from './ControlList.Menu';
import ListItem from './ControlList.Item';

function ControlList({
	className,
	forwardedRef,
	label = 'Control List',
	...props
}) {
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
		<ControlListContextProvider>
			<Surface className={classes} {...props}>
				<ListMenu label={label}>
					<ListItem icon={<FiAirplay />} />
					<ListItem type="next" nextLabel="There" />
					<ListItem />
				</ListMenu>
			</Surface>
		</ControlListContextProvider>
	);
}

export default platformConnect('ControlList', ControlList);
