import React, { Component } from 'react';
import { View, StyleSheet, Text, TextInput, Pressable} from 'react-native';
 
import {Picker} from '@react-native-picker/picker';
 
export default class App extends Component {
 constructor(props) {
   super(props);
   this.state = {
     campo: 0,
     moedaD: 0,
     moedaP: 0,
     resultado: 0,
     moedas: [
      {nome: 'Dolar', valor: 5.41},
      {nome: 'Real', valor: 1},
      {nome: 'Euro', valor: 5.31},
    ]
   }
   this.converter = this.converter.bind(this); 
 }

 converter() {
  let {moedaD} = this.state;
  let {moedaP} = this.state;
  moedaD = this.state.moedas[moedaD].valor;
  moedaP = this.state.moedas[moedaP].valor;
  let conta = (moedaD * this.state.campo) / moedaP;
  // alert(conta)
  this.setState({
    resultado: conta
  })
 }
 
 render(){
 
  let moedasItem = this.state.moedas.map( (valor, chave) => {
    return <Picker.Item key={chave} value={chave} label={valor.nome} />
  })
 
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Conversor de moedas Dolar, Real e Euro</Text>

      <View>
        <Text>Valor:</Text>
        <TextInput style={styles.input} onChangeText={ (texto) => this.setState({campo: texto})}/>
      </View>

      <View>
        <Text>De:</Text>
        <Picker style={styles.pick}
        selectedValue={this.state.moedaD}
        onValueChange={ (itemValue, itemIndex) => this.setState({moedaD: itemValue}) }
        >
  
        {moedasItem}
  
        </Picker>
      </View>

      <View>
        <Text>Para:</Text>
        <Picker style={styles.pick}
        selectedValue={this.state.moedaP}
        onValueChange={ (itemValue, itemIndex) => this.setState({moedaP: itemValue}) }
        >
  
        {moedasItem}
  
        </Picker>
      </View>

      <Pressable style={styles.btn} onPress={this.converter}>
        <Text>Converter</Text>
      </Pressable>

      <View style={{display: 'flex', alignItems: 'center'}}><Text style={{fontSize:20}}>{this.state.resultado}</Text></View>
     
 
    </View>
   );
 }
}
 
const styles = StyleSheet.create({
  container:{
    flex:1,
    margin: 20,
  },
  titulo:{
    textAlign: 'center',
    fontSize: 28,
    marginBottom: 10,
    marginTop: 10,
    color: 'red',
  },
  
  pick: {
    borderColor: 'black',
    borderWidth: 1,
  },
  btn:{
    width: 350,
    padding: 20,
    backgroundColor: '#55AAFF',
    marginBottom: 20,
    marginTop: 20,
    display: 'flex',    
    alignItems: 'center',
},
  input:{
    height: 50,
    width: '100%',
    borderWidth: 1,
    borderColor: 'black',
    margin: 10,
    fontSize: 20,
    padding: 10,

},
});
 
