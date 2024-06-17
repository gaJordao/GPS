import { StyleSheet } from "react-native-web";

const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:'#111',
      justifyContent:'center',
      alignItems:'center'
    },
  
    titulo:{
      color:'#fcfcfc', 
      fontWeight:'bold',
      fontSize:50,
    },
  
    login: {
      width: 50,
      height: 50,
    },
  
    input: {
      marginTop: 50,
      padding: 10,
      width: 300,
      backgroundColor: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
      borderRadius: 3
    },
  
    botao:{
      backgroundColor: '#fcfcfc',
      marginTop:20,
      width:"40%",
      alignItems:"center",
      borderRadius:10,
      width: 150
    },
  
    texto: {
      fontSize: 30,
      fontWeight: "bold",
      color: 'black'
    }
  
  })

export default styles
