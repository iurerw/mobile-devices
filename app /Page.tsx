import { Link, useLocalSearchParams } from "expo-router"
import { Text, View } from "react-native"



export default function Page(){

    const {id} = useLocalSearchParams();

    return (
    <View>
        <Link href="/PageTwo">Page Two</Link>
        <Text>{id}</Text>
    </View>
    )
}

