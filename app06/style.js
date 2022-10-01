import {StyleSheet} from 'react-native';

 
const styles = StyleSheet.create({
    
    titulo:{
      textAlign: 'center', 
      color: 'black',
      fontSize: 20,
      marginBottom: 20,
    },

    img: {
        width: 200, 
        height: 200, 
        alignSelf: 'center', 
        margin: 50,
    },

    span:{
        textAlign: 'center', 
        color: 'red',
        fontSize: 20,
        marginBottom: 20,
      },

    btn:{
        width: '100%',
        backgroundColor: '#55AAFF',
        marginTop: 20,
        marginBottom: 20,
        display: 'flex',
        alignItems: 'center',
        padding: 10,
    },
  });
 
  export {styles};

