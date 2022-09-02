import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import AppNavigator from './app'

const Stack = createNativeStackNavigator()

export default props => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
      animation: 'fade',
      presentation: 'transparentModal'
    }}
    {...props}
  >
    <Stack.Screen name='App' component={AppNavigator} />
  </Stack.Navigator>
)