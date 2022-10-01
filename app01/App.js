import React from 'react';
import { View, Text, Image} from 'react-native';

function App(){
  return(
    <View style={{ margin: 50}}>

      <Image 
      source={{ uri: 'https://static.wikia.nocookie.net/naruto/images/3/33/Naruto_Uzumaki_%28Parte_I_-_HD%29.png/revision/latest?cb=20160316113315&path-prefix=pt-br'}}
      style={{ width: 200, height: 200, alignSelf: 'center', margin: 50}}
      />
      <Text>Dados pessoais:</Text>
      <Text>Luca, 20 anos</Text>
      <Text>Formação:</Text>
      <Text>Informática para internet, Etec Aristóteles Ferreira</Text>
      <Text>Cursando Sistemas para internet, Fatec Rubens Lara</Text>
      <Text>Experiência:</Text>
      <Text>0</Text>
      <Text>Projetos:</Text>
      <Text>
        TCC
      </Text>
      
    </View>
    
  )
}
 
export default App;