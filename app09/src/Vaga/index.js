import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {styles} from './style'
 
class Vaga extends Component{
    render(){
      return(
        <View style={styles.box}>
          <Text style={styles.nome}>{this.props.data.nome}</Text>
          <Text>Salário: R$ {this.props.data.salario}</Text>
          <Text>Descrição: {this.props.data.descricao}</Text>
          <Text>Contato: {this.props.data.contato}</Text>
        </View>
      );
    }
  }
 
export default Vaga;
