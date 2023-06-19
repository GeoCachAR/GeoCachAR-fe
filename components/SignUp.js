import { Text, TextInput, View, Button } from "react-native";
import styles from "../StyleSheet";
import { signup, getUser } from "../utils";
import { uidContext } from "./Contexts";
import { useContext, useState } from "react";

export default function SignUp({ navigation }) {
  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const {setUser} = useContext(uidContext)

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>GeoCachAR</Text>
      <Text style={styles.tagline}>Enter Sign Up Details</Text>
      <View>
        <Text style={styles.formText}>Enter username:</Text>
        <TextInput onChangeText={(text)=>{setUsername(text)}} style={styles.input} placeholder="Enter username" />
        <Text style={styles.formText}>Enter email:</Text>
        <TextInput onChangeText={(text)=>{setEmail(text)}} style={styles.input} keyboardType="email-address" placeholder="Enter email" />
        <Text style={styles.formText}>Enter password:</Text>
        <TextInput
          onChangeText={(text)=>{setPassword(text)}}
          style={styles.input}
          secureTextEntry={true}
          placeholder="Enter password"
        />
      </View>
      <Button
        title="Sign Up"
        accessibilityLabel="Sign Up"
        onPress={() => {
          signup(username, email, password).then((uid)=>{
            return getUser(uid)
          }).then((user)=>{
            setUser(user)
            navigation.navigate("Navigation")
          })
        }}
      />
    </View>
  );
}
