import { css } from 'emotion';

const THEME_CONFIG_PROPS = {
	isDark: false,
};

const ANIMATION_PROPS = {
	transitionDuration: '200ms',
	transitionDurationFast: '120ms',
	transitionTimingFunction: 'cubic-bezier(0.08, 0.52, 0.52, 1)',
};

const COLOR_PROPS = {
	colorBrand: '#2D88FF',
	colorText: '#050505',
	colorTextDark: '#E4E6EB',
	colorBodyBackground: '#FFFFFF',
	colorBodyBackgroundDark: '#18191A',
};

const GRID_PROPS = {
	gridBase: 4,
};

const FONT_PROPS = {
	fontFamily:
		"Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
	fontSize: '15px',
};

const CONTROL_PROPS = {
	controlBackgroundColor: '#F0F2F5',
	controlBackgroundColorDark: '#3A3B3C',
	controlBackgroundColorHover: '#E6E8EB',
	controlBackgroundColorHoverDark: '#444546',
	controlBorderColor: '#DCDEE1',
	controlBorderColorDark: '#4E4F50',
	controlBorderRadius: '4px',
	controlBorderRadiusRound: '20px',
	controlBoxShadowFocusSize: '2px',
	controlHeight: '36px',
	controlHeightLarge: '40px',
	controlHeightSmall: '32px',
	controlHeightXLarge: '48px',
	controlHeightXSmall: '28px',
	controlLineHeight: '18px',
};

const INPUT_PROPS = {
	inputBackgroundColor: CONTROL_PROPS.controlBackgroundColor,
	inputBackgroundColorDark: CONTROL_PROPS.controlBackgroundColorDark,
	inputBackgroundColorHover: CONTROL_PROPS.controlBackgroundColorHover,
	inputBackgroundColorHoverDark:
		CONTROL_PROPS.controlBackgroundColorHoverDark,
	inputBorderColor: CONTROL_PROPS.controlBackgroundColor,
	inputBorderColorDark: CONTROL_PROPS.controlBackgroundColorDark,
	inputBorderColorFocus: COLOR_PROPS.colorBrand,
	inputBorderRadius: CONTROL_PROPS.controlBorderRadius,
	inputBorderRadiusRound: CONTROL_PROPS.controlBorderRadiusRound,
	inputBorderStyle: 'solid',
	inputBorderWidth: '1px',
	inputBoxShadow: `0 0 0 ${CONTROL_PROPS.controlBoxShadowFocusSize} transparent`,
	inputBoxShadowFocus: `0 0 0 ${CONTROL_PROPS.controlBoxShadowFocusSize} rgba(45, 136, 255, 0.2)`,
	inputFontFamily: FONT_PROPS.fontFamily,
	inputFontSize: FONT_PROPS.fontSize,
	inputHeight: CONTROL_PROPS.controlHeight,
	inputHeightLarge: CONTROL_PROPS.controlHeightLarge,
	inputHeightSmall: CONTROL_PROPS.controlHeightSmall,
	inputLineHeight: CONTROL_PROPS.controlLineHeight,
	inputPadding: '8px',
	inputPaddingLarge: '10px',
	inputPaddingSmall: '6px',
	inputPaddingX: '12px',
	inputTransition: `all ${ANIMATION_PROPS.transitionDurationFast} ${ANIMATION_PROPS.transitionTimingFunction}`,
};

const platformStyles = css`
	-webkit-font-smoothing: antialiased;
	box-sizing: border-box;
	font-family: ${FONT_PROPS.fontFamily};
	font-size: ${FONT_PROPS.fontSize};

	* {
		box-sizing: border-box;
	}
`;

export const THEME_PROPS = {
	// Base theme
	...THEME_CONFIG_PROPS,
	// Props
	...ANIMATION_PROPS,
	...COLOR_PROPS,
	...CONTROL_PROPS,
	...GRID_PROPS,
	...INPUT_PROPS,
	// Styles
	platformStyles,
};
