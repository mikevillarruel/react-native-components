import React, { createContext, useReducer } from 'react';
import { themeReducer, ThemeState, lightTheme } from './themeReducer';

interface ThemeContextProps {
    theme: ThemeState; // TODO:
    setDarkTheme: () => void;
    setLightTheme: () => void;
}

export const ThemeContext = createContext({} as ThemeContextProps);

interface ProviderProps {
    children: JSX.Element | JSX.Element[];
}

export const ThemeProvider = ({ children }: ProviderProps) => {

    const [theme, dispatch] = useReducer(themeReducer, lightTheme); // TODO: Read global theme ...

    const setDarkTheme = () => {
        dispatch({ type: 'set_dark_theme' });
        console.log('setDarkTheme');
    }

    const setLightTheme = () => {
        dispatch({ type: 'set_light_theme' });
        console.log('setLightTheme');
    }

    return (
        <ThemeContext.Provider
            value={{
                theme,
                setDarkTheme,
                setLightTheme,
            }}
        >
            {children}
        </ThemeContext.Provider>
    )
}