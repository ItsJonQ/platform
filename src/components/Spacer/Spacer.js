import React from 'react';
import { css, cx } from 'emotion';
import { platformConnect } from '../PlatformProvider';
import { useTheme } from '../../css';
import { toPx } from '../../utils';
import View from '../View';

function Spacer({
	className,
	forwardedRef,
	mt,
	mb,
	mr,
	ml,
	mx,
	my,
	pt,
	pb = 3,
	pr,
	pl,
	px,
	py,
	m,
	p,
	...props
}) {
	const { gridBase } = useTheme();
	const value = createValue(gridBase);

	const classes = cx(
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

	return <View className={classes} ref={forwardedRef} {...props} />;
}

function createValue(gridBase) {
	return (val) => toPx(val * gridBase);
}

export default platformConnect('Spacer', Spacer);
