import React from 'react';
import { css, cx } from 'emotion';
import { useTheme } from '../../css';
import { toPx } from '../../utils';

export default function Spacer({
	as = 'div',
	className,
	children,
	mt,
	mb = 3,
	mr,
	ml,
	mx,
	my,
	pt,
	pb,
	pr,
	pl,
	px,
	py,
	m,
	p,
	...props
}) {
	const { gridBase, baseStyles } = useTheme();
	const value = createValue(gridBase);

	const classes = cx(
		baseStyles,
		mt &&
			css`
				margin-top: ${value(mt)};
			`,
		mb &&
			css`
				margin-bottom: ${value(mb)};
			`,
		ml &&
			css`
				margin-left: ${value(ml)};
			`,
		mr &&
			css`
				margin-right: ${value(mr)};
			`,
		mx &&
			css`
				margin-left: ${value(mx)};
				margin-right: ${value(mx)};
			`,
		my &&
			css`
				margin-top: ${value(my)};
				margin-bottom: ${value(my)};
			`,
		m &&
			css`
				margin: ${value(m)};
			`,
		pt &&
			css`
				padding-top: ${value(pt)};
			`,
		pb &&
			css`
				padding-bottom: ${value(pb)};
			`,
		pl &&
			css`
				padding-left: ${value(pl)};
			`,
		pr &&
			css`
				padding-right: ${value(pr)};
			`,
		px &&
			css`
				padding-left: ${value(px)};
				padding-right: ${value(px)};
			`,
		py &&
			css`
				padding-top: ${value(py)};
				padding-bottom: ${value(py)};
			`,
		p &&
			css`
				padding: ${value(p)};
			`,
		className,
	);

	return React.createElement(
		as,
		{
			className: classes,
			...props,
		},
		children,
	);
}

function createValue(gridBase) {
	return (val) => toPx(val * gridBase);
}
