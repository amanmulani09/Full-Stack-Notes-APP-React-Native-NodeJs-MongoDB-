import { StyleSheet, Text, View } from 'react-native'
import { RootStackParamList } from '../AppNavigator'
import {StackNavigationProp} from '@react-navigation/stack'
import React from 'react'

interface navProps {
  navigation:StackNavigationProp<RootStackParamList,"Signup">
}

const Signup = ({navigation}:navProps) => {
  return (
    <View>
      <Text>Signup</Text>
    </View>
  )
}

export default Signup

const styles = StyleSheet.create({})