import { useState, useEffect } from 'react';
import json2mq from 'json2mq';
import { is, noop } from '../utils';

function mockMatchMedia() {
	return {
		addListener: noop,
		removeListener: noop,
	};
}

/**
 * Source:
 * https://github.com/jaredpalmer/the-platform
 */
export function useMediaQuery(query, defaultMatches = true) {
	const [matches, setMatches] = useState(defaultMatches);
	const matchMedia = window.matchMedia || mockMatchMedia;

	useEffect(() => {
		const mediaQueryList = matchMedia(
			is.string(query) ? query : json2mq(query),
		);
		let active = true;

		const listener = () => {
			if (!active) {
				return;
			}

			if (mediaQueryList.matches) {
				setMatches(true);
			} else {
				setMatches(false);
			}
		};

		mediaQueryList.addListener(listener);
		setMatches(mediaQueryList.matches);

		return () => {
			active = false;
			mediaQueryList.removeListener(listener);
		};
	}, [matchMedia, query]);

	return matches;
}
