import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/navigator/StackNavigator';
import { StatusBar } from 'react-native';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar
        translucent={true}
        backgroundColor='transparent'
        barStyle='dark-content'
      />
      <StackNavigator />
    </NavigationContainer>
  )
}

export default App;
