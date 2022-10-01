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

  calcular() {
    
    if (this.state.vl1 === '' || this.state.vl2 === '') {
      alert('Preencha todos os campos')
      return
    }

    let conta = parseFloat(this.state.vl1) / parseFloat(this.state.vl2);

    if(conta >= 0.7) {
      this.setState({resultado: 'Gasolina'})
    } else {
      this.setState({resultado: 'Alcool'})
    }
    
  }

  render() {
    return(
      <View style={{ margin: 50, flex: 1, alignItems:'center'}}>
  
        <Text style={styles.titulo}>Alcool ou Gasolina</Text>

        <Image source={{uri: 'https://www.ticketlog.com.br/blog/wp-content/uploads/2019/01/alcool-gasolina-1227x736.jpg'}}></Image>

        <TextInput style={styles.input} placeholder="Preço do Alcool" onChangeText={ (texto) => this.setState({vl1: texto})}/>

        <TextInput style={styles.input} placeholder="Preço da Gasolina" onChangeText={ (texto) => this.setState({vl2: texto})}/>
        
        <Pressable style={styles.btn} onPress={this.calcular}>
          <Text>Verificar</Text>
        </Pressable>

        <Text>{this.state.resultado}</Text>

      </View>
      
    )
  }
  
}


 
export default App;