import React, { createContext, forwardRef, useContext } from 'react';
import { is } from '@itsjonq/is';
import { ThemeProvider } from '../../css';

export const PlatformContext = createContext({});
export const usePlatformContext = () => useContext(PlatformContext);

export function platformConnect(key, Component) {
	return forwardRef((props, forwardedRef) => {
		const platformContext = usePlatformContext();
		const contextProps = platformContext[key];
		const mergedProps = is.plainObject(contextProps)
			? { ...contextProps, ...props }
			: props;

		return <Component {...mergedProps} forwardedRef={forwardedRef} />;
	});
}

export function PlatformProvider({ children, theme = {}, value = {} }) {
	return (
		<PlatformContext.Provider value={value}>
			<ThemeProvider theme={theme}>{children}</ThemeProvider>
		</PlatformContext.Provider>
	);
}

export default PlatformProvider;
