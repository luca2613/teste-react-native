import React, { Component } from 'react';
import { View, Text, Pressable} from 'react-native';
import { styles } from './style';
 
class App extends Component{
  
  constructor(props){
   super(props);
    this.state = {
      n: 0
    }

    this.somar = this.somar.bind(this);    
  }

  somar() {
    this.setState({
      n: this.state.n + 1
    })
  }

  subtrair() {
    if (this.state.n === 0) {
      n: 0
      return
    }
    this.setState({
      n: this.state.n - 1
    })
  }


  render() {
    return(
      <View style={{ margin: 50, display: 'flex', alignItems:'center'}}>
  
        <Text style={styles.titulo}>Contador de Pessoas</Text>
        <Text style={styles.qtPessoa}>{this.state.n}</Text>
        <Pressable style={styles.btnSoma} onPress={() => this.somar()}>
          <Text style={styles.simb}>+</Text>
        </Pressable>
        <Pressable style={styles.btnSub} onPress={() => this.subtrair()}>
          <Text style={styles.simb}>-</Text>
        </Pressable>

      </View>
      
    )
  }
  
}
 
export default App;