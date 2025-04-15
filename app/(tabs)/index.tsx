import {Text, View ,StyleSheet} from "react-native"
import FontAwesome from '@expo/vector-icons/FontAwesome';


export default function index(){
    
    const name:string = "Joao das Neves";
    const age:number = 30;
    const gender:string = "Masculino";
    
    return (
        <View style={styles.container}>
            <FontAwesome size={80} name="user" color="#0000ff" />
            <Text style={styles.text}>
                {name+"\n"}
                {age+" Years Old\n"}
                {gender}
            </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text:{
        fontSize:30,
        textAlign:'center'
    }
    
  });