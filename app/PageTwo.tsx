import { Link, router } from "expo-router";
import { Button, Text, View } from "react-native";

export default function PageTwo(){


    return (
        <View>
            <Link href="/">Go Home</Link>
            <Button title="button" onPress={() => {
                if(router.canDismiss()){
                    router.dismissAll();
                    router.replace('/')
                }
            }}/>
        </View>

    )

}
