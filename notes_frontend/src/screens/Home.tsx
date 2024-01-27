import { StyleSheet, Text, View } from 'react-native'
import {StackNavigationProp} from '@react-navigation/stack'
import React from 'react'
import { RootStackParamList } from '../AppNavigator'

interface navProps{
  navigation:StackNavigationProp<RootStackParamList,"Home">
}

const Home = ({navigation}:navProps) => {
  return (
    <View>
      <Text>Home</Text>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})