import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import { StatusBar, StyleSheet, Text, View, SafeAreaView } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'
import React from 'react'
import { RootStackParamList } from '../AppNavigator'
import { TouchableOpacity } from 'react-native-gesture-handler'

interface navProps {
  navigation: StackNavigationProp<RootStackParamList, "Home">
}

const Home = ({ navigation }: navProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
      <View style={styles.header} >
        <Text style={styles.headerTitle}>Fullstack Notes App</Text>
      </View>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnText}>Create Note</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height:'100%',
    backgroundColor:'red'
  },
  header: {
    width: '100%',
    height: 60,
    backgroundColor: 'white',
    elevation: 5,
    justifyContent: 'center',
    paddingLeft: 20
  },
  headerTitle: {
    color: 'black',
    fontSize: 18,
    fontWeight: '600'
  },
  btn: {
    width: 200,
    height: 50,
    borderRadius: 30,
    position: 'absolute',
    right: 20,
    bottom: 20,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center'
  },
  
  btnText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600'
  }
})