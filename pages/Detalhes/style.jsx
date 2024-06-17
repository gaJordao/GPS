import { StyleSheet, Dimensions} from "react-native-web";

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize:50,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  sensorContainer:{
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    padding: 25,
    borderRadius: 20
  },
  texto: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    padding: 10
  }
});

export default styles;