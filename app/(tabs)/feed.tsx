import { useRouter } from "expo-router";
import { Text, View, StyleSheet, Button} from "react-native"

export default function Feed(){
    const posts = [{user: 'Iure', content:'primeiro post para teste'},
     {user: 'Joao das Neves', content:'segundo post para teste'},
     {user: 'Fulano', content:'terceiro post para teste'},
     {user: 'Ciclano', content:'quarto post para teste'},
    ]
    const getContent = []; 
    const router = useRouter(); 
    for(let i = 0; i < posts.length; i++){
        getContent.push(<Button title={'Post ' + i} onPress={() => {
            router.navigate({
                        pathname:'../posts/post',
                        params: {user: posts[i].user, content: posts[i].content}    
                    })}
        } />)
        getContent.push(<Text>{'\n'}</Text>)
        /*(<Text>{
            posts[i].user+'\n'+
            posts[i].content+'\n'
            }</Text>)*/
    }

    return (
        <View>
            <Text style={styles.text}>{getContent}</Text>
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