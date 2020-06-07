import React from 'react';
import { is } from '../../utils';
import { useMediaQuery } from '../MediaQuery';

/**
 * Breakpoint values based on Bootstrap
 * https://getbootstrap.com/docs/4.3/layout/overview/#responsive-breakpoints
 */
const BREAKPOINTS = {
	xs: 575,
	sm: 576,
	md: 768,
	lg: 992,
	xl: 1200,
};

const defaultProps = {
	breakpoint: 'md',
};

function getBreakpointValue(breakpoint) {
	if (is.number(breakpoint)) {
		return { minWidth: breakpoint };
	}
	if (is.string(breakpoint)) {
		const value = BREAKPOINTS[breakpoint];
		return value ? { minWidth: value } : breakpoint;
	}

	return null;
}

export function Viewport({ breakpoint, children, media }) {
	const visible = useMediaQuery(media || getBreakpointValue(breakpoint));
	return visible ? children : null;
}

export function ViewportMobile(props) {
	return <Viewport {...props} media={{ maxWidth: BREAKPOINTS.xs }} />;
}

export function ViewportPhablet(props) {
	return <Viewport {...props} breakpoint="sm" />;
}

export function ViewportPhabletOnly(props) {
	const media = { minWidth: BREAKPOINTS.sm, maxWidth: BREAKPOINTS.md };
	return <Viewport {...props} media={media} />;
}

export function ViewportTablet(props) {
	return <Viewport {...props} breakpoint="md" />;
}

export function ViewportTabletOnly(props) {
	const media = { minWidth: BREAKPOINTS.md, maxWidth: BREAKPOINTS.lg };
	return <Viewport {...props} media={media} />;
}

export function ViewportDesktop(props) {
	return <Viewport {...props} breakpoint="lg" />;
}

Viewport.defaultProps = defaultProps;

Viewport.Mobile = ViewportMobile;
Viewport.Phablet = ViewportPhablet;
Viewport.Tablet = ViewportTablet;
Viewport.Desktop = ViewportDesktop;

Viewport.PhabletOnly = ViewportPhabletOnly;
Viewport.TabletOnly = ViewportTabletOnly;

export default Viewport;
