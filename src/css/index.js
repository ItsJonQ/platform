import { useTheme as useEmotionTheme } from 'emotion-theming';
import { THEME_PROPS } from './theme';

export { default as cx } from 'classnames';
export { ThemeProvider, withTheme } from 'emotion-theming';

/**
 * Hook that retrieves theme props.
 * @return {THEME_PROPS} Theme props
 */
export function useTheme() {
	const emotionTheme = useEmotionTheme();
	const theme = emotionTheme
		? { ...THEME_PROPS, ...emotionTheme }
		: THEME_PROPS;

	return theme;
}
