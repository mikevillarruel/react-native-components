import { Theme } from "@react-navigation/native";

type ThemeAction =
    | { type: 'set_light_theme' }
    | { type: 'set_dark_theme' }

export interface ThemeState extends Theme {
    currentTheme: 'light' | 'dark';
    dividerColor: string;
}

export const lightTheme: ThemeState = {
    currentTheme: 'light',
    dark: false,
    dividerColor: 'rgba(0,0,0,0.4)',
    colors: {
        primary: 'green',
        background: 'white',
        card: 'white',
        text: 'black',
        border: 'black',
        notification: 'teal',
    },
}

export const darkTheme: ThemeState = {
    currentTheme: 'dark',
    dark: true,
    dividerColor: 'rgba(255,255,255,0.4)',
    colors: {
        primary: '#5856D6',
        background: 'black',
        card: 'black',
        text: 'white',
        border: 'white',
        notification: 'teal',
    },
}

export const themeReducer = (state: ThemeState, action: ThemeAction): ThemeState => {

    switch (action.type) {
        case 'set_light_theme':
            return { ...lightTheme };
        case 'set_dark_theme':
            return { ...darkTheme };
        default:
            return state;
    }

}