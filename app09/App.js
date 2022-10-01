import React, { Component } from 'react';
import { View, FlatList, Text } from 'react-native';
import Vaga from './src/Vaga'
import {styles} from './style'

class App extends Component{
 
  constructor(props) {
    super(props);
    this.state = {
      feed:[
        {id: 1, nome: 'Desenvolvedor Backend', salario: 3000.00, descricao: 'vagal tal pra num sei oq sla alguma coisa lorem ip', contato: 'vagas@gmail.com'},
        {id: 2, nome: 'Engenheiro de dados', salario: 3000.00, descricao: 'vagal tal pra num sei oq sla alguma coisa lorem ip', contato: 'vagas@gmail.com'},
        {id: 3, nome: 'Desenvolvedor Backend', salario: 3000.00, descricao: 'vagal tal pra num sei oq sla alguma coisa lorem ip', contato: 'vagas@gmail.com'},
        {id: 4, nome: 'Engenheiro de dados', salario: 3000.00, descricao: 'vagal tal pra num sei oq sla alguma coisa lorem ip', contato: 'vagas@gmail.com'},
        {id: 5, nome: 'Desenvolvedor Backend', salario: 3000.00, descricao: 'vagal tal pra num sei oq sla alguma coisa lorem ip', contato: 'vagas@gmail.com'},
        {id: 6, nome: 'Engenheiro de dados', salario: 3000.00, descricao: 'vagal tal pra num sei oq sla alguma coisa lorem ip', contato: 'vagas@gmail.com'},
        {id: 7, nome: 'Desenvolvedor Backend', salario: 3000.00, descricao: 'vagal tal pra num sei oq sla alguma coisa lorem ip', contato: 'vagas@gmail.com'},
        {id: 8, nome: 'Engenheiro de dados', salario: 3000.00, descricao: 'vagal tal pra num sei oq sla alguma coisa lorem ip', contato: 'vagas@gmail.com'},
        {id: 9, nome: 'Desenvolvedor Backend', salario: 3000.00, descricao: 'vagal tal pra num sei oq sla alguma coisa lorem ip', contato: 'vagas@gmail.com'},
        {id: 10, nome: 'Engenheiro de dados', salario: 3000.00, descricao: 'vagal tal pra num sei oq sla alguma coisa lorem ip', contato: 'vagas@gmail.com'},
        
      ]
    }
  }
 
  render(){
    return(
      <View style={{ margin: 10, display: 'flex' }}>
        <Text style={styles.titulo}>Vagas</Text>
        <FlatList 
        data={this.state.feed}
        keyExtractor={(item) => item.id}
        renderItem={ ({item}) => <Vaga data={item}/>}
        />
      </View>
    )
  }
}
 
export default App;
