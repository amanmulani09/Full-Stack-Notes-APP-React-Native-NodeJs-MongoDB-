import { StyleSheet, Text, View } from 'react-native'
import {StackNavigationProp} from '@react-navigation/stack'
import { RootStackParamList } from '../AppNavigator'
import React from 'react'


interface navProps {
  navigation:StackNavigationProp<RootStackParamList,"Login">
}
const Login = ({navigation}:navProps) => {
  return (
    <View>
      <Text>Login</Text>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  
})