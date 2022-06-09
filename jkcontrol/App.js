import React from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import StackNavigator from './components/StackNavigator';

export default class App extends React.Component {
  render(){
    return (
      <NavigationContainer>
        <StackNavigator/>
        <StatusBar style = 'dark'/>
      </NavigationContainer>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 5,
    paddigRight: 5,
    backgroundColor: '#F5F5F5'
  }
});



