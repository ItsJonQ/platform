import { css } from 'emotion';
import { useTheme as useEmotionTheme } from 'emotion-theming';
import { THEME_PROPS } from './theme';
import { toPx } from '../utils';

/**
 * Hook that retrieves theme props.
 * @return {THEME_PROPS} Theme props
 */
export function useTheme() {
	const emotionTheme = useEmotionTheme();
	const theme = emotionTheme
		? { ...THEME_PROPS, ...emotionTheme }
		: THEME_PROPS;

	// Mixins
	theme.breakpoint = createBreakpoints();
	theme.space = createSpace(theme.gridBase);

	return theme;
}

/**
 * Creates a space mixin. Used to retrieve space values based on theme.gridBase.
 * @param {number} gridBase The base grid value.
 * @returns {Function} The space function.
 */
function createSpace(gridBase = THEME_PROPS.gridBase) {
	return (value = 0) => {
		return toPx(value * gridBase);
	};
}

function createBreakpoints() {
	const sizes = {
		lg: 992,
		md: 768,
		sm: 576,
	};

	return (size = 'md') => {
		return (strings, ...interpolations) => {
			const interpolatedStyles = css(strings, ...interpolations);

			if (size === 'xs') {
				return css`
					@media (max-width: ${sizes.sm - 1}px) {
						${interpolatedStyles}
					}
				`;
			}

			const minWidth = sizes[size] || sizes.md;

			return css`
				@media (min-width: ${minWidth}px) {
					${interpolatedStyles}
				}
			`;
		};
	};
}

export default useTheme;
