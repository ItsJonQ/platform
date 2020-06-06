import { useTheme as useEmotionTheme } from 'emotion-theming';
import { THEME_PROPS } from './theme';

export * from 'emotion';
export * from 'emotion-theming';

export function useTheme() {
	const emotionTheme = useEmotionTheme();
	const theme = emotionTheme
		? { ...THEME_PROPS, ...emotionTheme }
		: THEME_PROPS;

	return theme;
}
