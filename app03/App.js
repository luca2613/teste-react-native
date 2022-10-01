import React, { Component } from 'react';
import { View, Text, Pressable, TextInput} from 'react-native';
import { styles } from './style';
 
class App extends Component{
  
  constructor(props){
   super(props);
    this.state = {
      vl1: '',
      vl2: '',
      resultado: '',
    }

    this.calcular = this.calcular.bind(this);    
  }

  calcular() {
    if (this.state.vl1 === '' || this.state.vl2 === '') {
      alert('Preencha todos os campos')
      return
    }
    this.setState({
      resultado: 'resultado: ' + this.state.vl1 * this.state.vl2
    })
    
  }

  render() {
    return(
      <View style={{ margin: 50, flex: 1, alignItems:'center'}}>
  
        <Text style={styles.titulo}>Multiplicador de numeros</Text>

        <TextInput style={styles.input} placeholder="Digite o primeiro nº" onChangeText={ (texto) => this.setState({vl1: texto})}/>

        <TextInput style={styles.input} placeholder="Digite o segundo nº" onChangeText={ (texto) => this.setState({vl2: texto})}/>
        
        <Pressable style={styles.btn} onPress={this.calcular}>
          <Text>Calcular</Text>
        </Pressable>

        <Text>{this.state.resultado}</Text>

      </View>
      
    )
  }
  
}


 
export default App;