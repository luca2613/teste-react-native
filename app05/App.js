import React, { Component } from 'react';
import { View, Text, Pressable, TextInput, Image} from 'react-native';
import { styles } from './style';
 
class App extends Component{
  
  constructor(props){
   super(props);
    this.state = {
      vl1: 0,
      vl2: 0,

      resultado: '',
    }

    this.calcular = this.calcular.bind(this);    
  }

  imc($n) {
  
    if($n < 18.5) {
      return "Abaixo do peso"
    }
    else if ($n >= 18.5 && $n <= 24.9) {
      return "Peso normal"
    }
    else if ($n >= 25 && $n <= 29.9) {
      return "Sobrepeso"
    }
    else if ($n >= 30 && $n <= 34.9) {
      return "Obesidade grau I"
    }
    else if ($n >= 35 && $n <= 39.9) {
      return "Obesidade grau II"
    }
    else if ($n >= 40){
      return "Obesidade grau III ou Mórbida" 
    }
  }

  calcular() {
    
    if (this.state.vl1 === '' || this.state.vl2 === '') {
      alert('Preencha todos os campos')
      return
    }

    let conta = parseFloat(this.state.vl1) / (parseFloat(this.state.vl2)**2);
    let resultado = this.imc(conta)
    this.setState({ resultado })
    
  }

  render() {
    return(
      <View style={{ margin: 50, flex: 1, alignItems:'center'}}>
  
        <Text style={styles.titulo}>Cálculo do imc</Text>

        <Image style={styles.img} source={{uri: 'https://pt.calcuworld.com/wp-content/uploads/sites/6/2019/07/imc-.png'}}></Image>

        <TextInput style={styles.input} placeholder="Peso" onChangeText={ (texto) => this.setState({vl1: texto})}/>

        <TextInput style={styles.input} placeholder="Altura" onChangeText={ (texto) => this.setState({vl2: texto})}/>
        
        <Pressable style={styles.btn} onPress={this.calcular}>
          <Text>Verificar</Text>
        </Pressable>

        <Text>{this.state.resultado}</Text>

      </View>
      
    )
  }
  
}


 
export default App;