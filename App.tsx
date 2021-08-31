import React from 'react'
import { DarkTheme, DefaultTheme, NavigationContainer, Theme } from '@react-navigation/native';
import { StackNavigator } from './src/navigator/StackNavigator';
import { StatusBar } from 'react-native';
import { ThemeProvider } from './src/context/themeContext/ThemeContext';

// const customTheme: Theme = {
//   dark: true,
//   colors: {
//     ...DefaultTheme.colors,
//     // primary: "string",
//     // background: "string",
//     // card: "string",
//     // text: "string",
//     // border: "string",
//     // notification: "string",
//   }
// }

const App = () => {
  return (
    <AppState>
      <StatusBar
        translucent={true}
        backgroundColor='rgba(0,0,0,0.3)'
        barStyle='light-content'
      />
      <StackNavigator />
    </AppState>
  )
}

const AppState = ({ children }: any) => {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  )
}

export default App;
