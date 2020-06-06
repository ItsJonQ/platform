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
	colorText: 'rgb(5, 5, 5)',
	colorTextDark: 'rgb(228, 230, 235)',
	colorBrand: 'rgb(45, 136, 255)',
};

const GRID_PROPS = {
	gridBase: 4,
};

const FONT_PROPS = {
	fontSize: '15px',
	fontFamily:
		"Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
};

const CONTROL_PROPS = {
	controlBackgroundColor: 'rgb(240, 242, 245)',
	controlBackgroundColorDark: 'rgba(58, 59, 60)',
	controlBorderRadius: '4px',
	controlBorderRadiusRound: '20px',
	controlHeight: '36px',
	controlHeightXSmall: '28px',
	controlHeightSmall: '32px',
	controlHeightLarge: '40px',
	controlHeightXLarge: '48px',
	controlLineHeight: 1,
};

const INPUT_PROPS = {
	inputBackgroundColor: CONTROL_PROPS.controlBackgroundColor,
	inputBackgroundColorDark: CONTROL_PROPS.controlBackgroundColorDark,
	inputBorderColor: CONTROL_PROPS.controlBackgroundColor,
	inputBorderColorDark: CONTROL_PROPS.controlBackgroundColorDark,
	inputBorderColorFocus: COLOR_PROPS.colorBrand,
	inputBorderRadius: CONTROL_PROPS.controlBorderRadius,
	inputBorderRadiusRound: CONTROL_PROPS.controlBorderRadiusRound,
	inputBorderStyle: 'solid',
	inputBorderWidth: '1px',
	inputBoxShadow: '0 0 0 2px transparent',
	inputBoxShadowFocus: '0 0 0 2px rgba(45, 136, 255, 0.2)',
	inputFontFamily: FONT_PROPS.fontFamily,
	inputFontSize: FONT_PROPS.fontSize,
	inputHeight: CONTROL_PROPS.controlHeight,
	inputHeightSmall: CONTROL_PROPS.controlHeightSmall,
	inputHeightLarge: CONTROL_PROPS.controlHeightLarge,
	inputLineHeight: 1.2,
	inputPadding: '8px 12px',
	inputPaddingSmall: '6px 12px',
	inputPaddingLarge: '10px 12px',
	inputTransition: `all ${ANIMATION_PROPS.transitionDurationFast} ${ANIMATION_PROPS.transitionTimingFunction}`,
};

const platformStyles = css`
	box-sizing: border-box;
	-webkit-font-smoothing: antialiased;

	* {
		box-sizing: border-box;
	}
`;

export const THEME_PROPS = {
	...THEME_CONFIG_PROPS,
	...ANIMATION_PROPS,
	...COLOR_PROPS,
	...CONTROL_PROPS,
	...INPUT_PROPS,
	...GRID_PROPS,
	platformStyles,
};
