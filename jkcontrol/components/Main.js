import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { StyleSheet, Text, View, StatusBar, TextInput, SafeAreaView, TouchableOpacity} from 'react-native';

export default function Main({navigation, props}){
    const [nome, setNome] = useState('');

    const navegar = () => {
        navigation.navigate("Autorizar", {nome})
    }
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <Text style={styles.txtPrincipal}>Prova Semestral</Text>
        </View>
        <View>
          <TextInput style={styles.txtInput} placeholder='Nome' onChangeText={nome => setNome(nome)}/>
        </View>
        <View style={styles.containerBtn}>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.txtBtn}>Limpar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress = { () => navegar()}>
            <Text style={styles.txtBtn}>Solicitar Autorização</Text>
          </TouchableOpacity>
        </View>
        <StatusBar style="auto" />
      </SafeAreaView>
    )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 5,
    paddigRight: 5,
    backgroundColor: '#F5F5F5'
  },
  txtPrincipal:{
    width: 245,
    height: 80,
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 32,
    textAlign: 'center',
    color: '#5362ED'
  },
  txtInput:{
    width: 330,
    height: 40,
    backgroundColor: '#6370EB',
    borderRadius: 3, 
    color:'#FFFFFF'
  }, 
  btn:{
    width: 155, 
    height: 30,
    padding: 5,
    backgroundColor: '#6370EB',
    borderRadius: 3,
    color: '#FCFCFF'
  },
  txtBtn:{
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 16,
    textAlign: 'center',
    color: '#FFFFFF'
  },
  containerBtn:{
    marginTop: 30,
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  }
});



