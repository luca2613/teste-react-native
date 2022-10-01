import React, { Component } from 'react';
import { View, Text, Pressable, Image} from 'react-native';
import { styles } from './style';
 
class App extends Component{
  
  constructor(props){
   super(props);
    this.state = {
      n: 0
    }

    this.gerar = this.gerar.bind(this);    
  }

  gerar() {
    this.setState({
      n: Math.floor(Math.random() * 10)
    })
  }

  render() {
    return(
      <View style={{ margin: 50, display: 'flex', alignItems:'center'}}>
  
        <Text style={styles.titulo}>Jogo do Nº aleatório</Text>

        <Image style={styles.img} source={{uri: 'https://cdn-icons-png.flaticon.com/512/74/74375.png'}}></Image>
      
        <Text style={styles.span}>Pense em um nº de 0 a 10</Text>

        <Text style={styles.span}>{this.state.n}</Text>

        <Pressable style={styles.btn} onPress={() => this.gerar()}>
          <Text>Descobrir</Text>
        </Pressable>

      </View>
      
    )
  }
  
}
 
export default App;