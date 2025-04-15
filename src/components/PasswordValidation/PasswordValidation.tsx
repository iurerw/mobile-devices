import { View, Text, TextInput, StyleSheet, Button} from 'react-native'
import React, { useEffect, useState } from 'react'

export default function PasswordValidation() {
    const [password, setPassword] = useState(""); 
    const [pwdConfirmation, setPwdConfirmation] = useState(""); 
    const [passwordIsValid, setPasswordIsValid] = useState(false); 

    useEffect(() => {
        setPasswordIsValid(isValid());
    }, [password,pwdConfirmation])
    
    
    const isValid = () => {
        if(password.length >= 6)    
            if(password.match(/[a-z]/) && password.match(/[0-9]/)&& password.match(/[\W|_Z]/))
                if(password == pwdConfirmation)
                    return true; 
        
        return false;
    }

    const resetPassword = () => {
        console.log("Password Reseted"); 
        setPassword("");
        setPwdConfirmation("");
    }


  return (
    <View>
      <TextInput  
      style={styles.input} 
      onChangeText={setPassword}
      value={password}
      placeholder={"password"} 
      secureTextEntry />

      <TextInput 
      style={styles.input}
      onChangeText={setPwdConfirmation}
      value={pwdConfirmation}
      placeholder={"password confirmation"} 
      secureTextEntry/>

      {passwordIsValid && <Button title='Reset Password' onPress={resetPassword} />} 
    </View>
  )
}


const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      width: 200
    },
    Button:{
      width: 10
    }
  })