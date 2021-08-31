import React, { createContext, useEffect, useReducer } from 'react';
import { Appearance, AppState, useColorScheme } from 'react-native';
import { darkTheme, lightTheme, themeReducer, ThemeState } from './themeReducer';

interface ThemeContextProps {
    theme: ThemeState;
    setDarkTheme: () => void;
    setLightTheme: () => void;
}

export const ThemeContext = createContext({} as ThemeContextProps);

interface ProviderProps {
    children: JSX.Element | JSX.Element[];
}

export const ThemeProvider = ({ children }: ProviderProps) => {

    // const colorScheme = useColorScheme();

    const [theme, dispatch] = useReducer(
        themeReducer,
        (Appearance.getColorScheme() === 'dark')
            ? darkTheme
            : lightTheme
    );

    {/* Only iOS */ }

    // useEffect(() => {
    //     (colorScheme === 'dark')
    //         ? setDarkTheme()
    //         : setLightTheme();
    // }, [colorScheme])

    useEffect(() => {
        AppState.addEventListener('change', (status) => {
            status === 'active' &&
                (Appearance.getColorScheme() === 'dark')
                ? setDarkTheme()
                : setLightTheme();
        })
    }, [])

    const setDarkTheme = () => {
        dispatch({ type: 'set_dark_theme' });
    }

    const setLightTheme = () => {
        dispatch({ type: 'set_light_theme' });
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