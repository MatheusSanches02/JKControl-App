import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Main from './Main'
import Autorizar from './Autorizar';

const Stack = createNativeStackNavigator()

export default function StackNavigator(){
  return(
  <Stack.Navigator screenOptions={{headerShow: false}}> 
      <Stack.Screen name = "Main" component = {Main}/>
      <Stack.Screen name = "Autorizar" component = {Autorizar}/>
  </Stack.Navigator>
)}