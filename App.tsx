import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/components/Login/Login';
import PasswordValidation from './src/components/PasswordValidation/PasswordValidation';

export default function App() {
  return (
    <View style={styles.container}>
      <PasswordValidation />
      
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
  
});
