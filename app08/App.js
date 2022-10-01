import React, { Component } from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import Anuncio from './src/Anuncio'
import { styles } from './style';


class App extends Component{
 
  constructor(props) {
    super(props);
    this.state = {
      feed:[
        {id: 1, nome: 'Naruto Gold Vol. 72', preco: 23.54, img: 'https://m.media-amazon.com/images/I/51+iKkb-KZS._AC_UL320_.jpg'},
        {id: 2, nome: 'Cadeira Gamer TGT Heron Preta e Rosa TGT-HR-BPK01', preco: 530.91, img: 'https://m.media-amazon.com/images/I/41p0s8BgUbL._AC_UF226,226_FMjpg_.jpg'},
        {id: 3, nome: 'LEGO® Technic Reboque para Trabalhos Pesados', preco: 600.00, img: 'https://m.media-amazon.com/images/I/61xsMWnxrQL._AC_UF226,226_FMjpg_.jpg'},
        {id: 4, nome: 'Echo Dot (4ª Geração): Smart Speaker com Alexa', preco: 279.00, img: 'https://m.media-amazon.com/images/I/51ydNSj0AiL._AC_UF226,226_FMjpg_.jpg'},
        {id: 5, nome: 'The Last Of Us Remasterizado Hits - PlayStation 4', preco: 99.00, img: 'https://m.media-amazon.com/images/I/71ekFvMw6rL._AC_UL320_.jpg'},
      ]
    }
  }
 
  render(){
    return(
      <View style={{ margin: 50, flex: 1,}}>
        <Text style={styles.titulo}>Anúncios</Text>
        <FlatList horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={this.state.feed}
        keyExtractor={(item) => item.id}
        renderItem={ ({item}) => <Anuncio data={item}/>}
        />
      </View>
    )
  }
}
 
 
export default App;
