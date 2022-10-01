import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import {styles} from './style'
 
class Anuncio extends Component{
    render(){
      return(
        <View style={styles.box}>
          <Image style={styles.imagem} source={{uri: this.props.data.img}}></Image>
          <Text>{this.props.data.nome}</Text>
          <Text style={styles.preco}>R$: {this.props.data.preco}</Text>
        </View>
      );
    }
  }
 
export default Anuncio;