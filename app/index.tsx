import { Link, useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import FirstScreen from './Page';
import { useState } from 'react';

export default function App() {

  const id:number = Math.floor(Math.random()*20);
  const router = useRouter(); 

  return (
    <View style={styles.container}>
      <Link style={styles.text} href={{
          pathname: '/Page',
          params: {id}
        }}>Click Here</Link>
        <Text></Text>
        <Button title="Go To Page One" onPress={() => router.navigate('/Page')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    fontSize:30
  }
  
});
