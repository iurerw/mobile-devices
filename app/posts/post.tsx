import { useLocalSearchParams } from "expo-router"
import { Text, View ,StyleSheet } from "react-native";

export default function Posts(){
    const {user, content} = useLocalSearchParams();
    
    
    return (
    <View>
        <Text style={styles.text}>{user + '\n'}</Text>
        <Text style={styles.text}>{content}</Text>
    </View>
)
}const styles = StyleSheet.create({
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