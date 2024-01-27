import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import Splash from './screens/Splash';
import Login from './screens/Login';
import Signup from './screens/Signup';
import Home from './screens/Home';

export type RootNavigationProps = {
    Splash: undefined,
    Login: undefined;
    Signup: undefined,
    Home: undefined
}

const Stack = createStackNavigator<RootNavigationProps>();
const AppNavigator = () => {

  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name='Splash' component={Splash}/>
            <Stack.Screen name='Login' component={Login}/>
            <Stack.Screen name='Signup' component={Signup}/>
            <Stack.Screen name='Home' component={Home}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator;