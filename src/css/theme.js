import { css } from 'emotion';
import tinycolor from 'tinycolor2';
import { toPx } from '../utils';

const THEME_CONFIG_PROPS = {
	isDark: false,
};

const ANIMATION_PROPS = {
	transitionDuration: '200ms',
	transitionDurationFast: '120ms',
	transitionTimingFunction: 'cubic-bezier(0.08, 0.52, 0.52, 1)',
};

const COLOR_PROPS = {
	colorBrand: '#1E82FF',
	colorBrandHover: tinycolor('#1E82FF').lighten(5).toHexString(),
	colorBrandActive: tinycolor('#1E82FF').darken(5).toHexString(),
	colorBrandFocus: tinycolor('#1E82FF').lighten(10).toHexString(),
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
	controlBorderRadius: '6px',
	controlBorderRadiusRound: '20px',
	controlBoxShadowFocusSize: '2px',
	controlHeight: '36px',
	controlHeightLarge: '40px',
	controlHeightSmall: '32px',
	controlHeightXLarge: '48px',
	controlHeightXSmall: '28px',
	controlLineHeight: '18px',
};

const BUTTON_PROPS = {
	buttonBackgroundColor: CONTROL_PROPS.controlBackgroundColor,
	buttonBackgroundColorDark: CONTROL_PROPS.controlBackgroundColorDark,
	buttonBackgroundColorHover: CONTROL_PROPS.controlBackgroundColorHover,
	buttonBackgroundColorHoverDark:
		CONTROL_PROPS.controlBackgroundColorHoverDark,
	buttonBackgroundColorPrimary: COLOR_PROPS.colorBrand,
	buttonBackgroundColorPrimaryActive: COLOR_PROPS.colorBrandActive,
	buttonBackgroundColorPrimaryHover: COLOR_PROPS.colorBrandHover,
	buttonBorderColorFocus: 'transparent',
	buttonBorderColorOutline: CONTROL_PROPS.controlBorderColor,
	buttonBorderColorOutlineDark: CONTROL_PROPS.controlBorderColorDark,
	buttonBorderRadius: CONTROL_PROPS.controlBorderRadius,
	buttonBorderRadiusRound: CONTROL_PROPS.controlHeightXLarge,
	buttonBorderStyle: 'solid',
	buttonBorderWidth: '1px',
	buttonTextColorPrimary: '#FFFFFF',
	buttonBoxShadow: `0 0 0 ${CONTROL_PROPS.controlBoxShadowFocusSize} transparent`,
	buttonBoxShadowFocus: `0 0 0 ${CONTROL_PROPS.controlBoxShadowFocusSize} rgba(45, 136, 255, 0.4)`,
	buttonFontWeight: 600,
	buttonHeight: CONTROL_PROPS.controlHeight,
	buttonHeightLarge: CONTROL_PROPS.controlHeightLarge,
	buttonHeightSmall: CONTROL_PROPS.controlHeightSmall,
	buttonLineHeight: CONTROL_PROPS.controlLineHeight,
	buttonPadding: '0',
	buttonPaddingX: toPx(GRID_PROPS.gridBase * 4),
	buttonTransform: 'scale(1)',
	buttonTransformActive: 'scale(0.96)',
	buttonTransitionDuration: '200ms',
	buttonTransitionTimingFunction: 'cubic-bezier(0.12, 0.8, 0.32, 1)',
};

const ICON_CONTROL_PROPS = {
	iconControlBackgroundColor: CONTROL_PROPS.controlBackgroundColor,
	iconControlBackgroundColorDark: CONTROL_PROPS.controlBackgroundColorDark,
	iconControlBackgroundColorHover: CONTROL_PROPS.controlBackgroundColorHover,
	iconControlBackgroundColorHoverDark:
		CONTROL_PROPS.controlBackgroundColorHoverDark,
	iconControlBorderRadius: '50%',
	iconControlPadding: '0',
	iconControlSize: CONTROL_PROPS.controlHeightLarge,
	iconControlSizeLarge: CONTROL_PROPS.controlHeightXLarge,
	iconControlSizeSmall: CONTROL_PROPS.controlHeightSmall,
	iconControlTransform: 'scale(1)',
	iconControlTransformActive: 'scale(0.96)',
	iconControlTransitionDuration: '200ms',
	iconControlTransitionTimingFunction: 'cubic-bezier(0.12, 0.8, 0.32, 1)',
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
	...BUTTON_PROPS,
	...COLOR_PROPS,
	...CONTROL_PROPS,
	...GRID_PROPS,
	...ICON_CONTROL_PROPS,
	...INPUT_PROPS,
	// Styles
	platformStyles,
};
