import React from 'react';
import { StyleSheet, Text, View, StatusBar, TextInput, SafeAreaView, TouchableOpacity } from 'react-native';

export default class Autorizar extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name: props.name
        }
    }
  render(){
    
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <Text style={styles.txtPrincipal}>Prova Semestral</Text>
        </View>
        <View>
          <Text>{this.state.name}</Text>
        </View>
        <View style={styles.containerBtn}>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.txtBtn}>Não Autorizar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.txtBtn}>Autorizar</Text>
          </TouchableOpacity>
        </View>
        <StatusBar style="auto" />
      </SafeAreaView>
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
  txtName:{
    width: 330,
    height: 40,
    background: '#6370EB',
    borderRadius: 3, 
    color:'#1E1C1C'
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



