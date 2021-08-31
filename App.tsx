import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/navigator/StackNavigator';
import { StatusBar } from 'react-native';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar
        translucent={true}
        backgroundColor='rgba(0,0,0,0.3)'
        barStyle='light-content'
      />
      <StackNavigator />
    </NavigationContainer>
  )
}

export default App;
