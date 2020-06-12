import React, { createContext, forwardRef, useContext } from 'react';
import { cx } from 'emotion';
import { useTheme as useEmotionTheme } from 'emotion-theming';
import GlobalStyles from '../GlobalStyles';
import { is } from '../../utils';
import { ThemeProvider, useTheme } from '../../css';

export const PlatformContext = createContext({});
export const usePlatformContext = () => useContext(PlatformContext);

export function platformConnect(key, Component) {
	const ComposedComponent = forwardRef(
		({ className, ...props }, forwardedRef) => {
			const { platformStyles } = useTheme();
			const platformContext = usePlatformContext();
			const contextProps = platformContext[key];
			const mergedProps = is.plainObject(contextProps)
				? { ...contextProps, ...props }
				: props;

			const classes = cx(platformStyles, className);

			return (
				<Component
					{...mergedProps}
					forwardedRef={forwardedRef}
					className={classes}
				/>
			);
		},
	);

	return ComposedComponent;
}

export function PlatformProvider({ children, theme = {}, value = {} }) {
	const contextThemeProps = useEmotionTheme();
	const mergedThemeProps = { ...useTheme(), ...contextThemeProps, ...theme };

	return (
		<PlatformContext.Provider value={value}>
			<ThemeProvider theme={mergedThemeProps}>
				<GlobalStyles />
				{children}
			</ThemeProvider>
		</PlatformContext.Provider>
	);
}

export default PlatformProvider;
