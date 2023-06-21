import { Text, TextInput, View, Button } from "react-native";
import { useContext, useState } from "react";
import styles from "../StyleSheet";
import { authenticate } from "../utils";
import { uidContext } from "./Contexts";

export default function LogIn({ navigation }) {
  const [inputs, setInputs] = useState({ email: "", password: "" });
  const { setUser } = useContext(uidContext);

  function handleLogin() {
    return authenticate(inputs.email, inputs.password).then((uid) => {
      return uid;
    });
  }

  return (
    <View style={styles.container} accessible={true}>
      <Text style={styles.logo}>
        GeoCachAR {`${inputs.email} ${inputs.password}`}
      </Text>
      <Text style={styles.tagline}>Enter Log In Details</Text>
      <View accessible={true}>
        <Text style={styles.formText}>Enter email:</Text>
        <TextInput
          accessibilityLabel="login email address"
          style={styles.input}
          keyboardType="email-address"
          onChangeText={(text) =>
            setInputs((curr) => {
              return { ...curr, email: text };
            })
          }
          placeholder="Enter email"
        />
        <Text style={styles.formText}>Enter password:</Text>
        <TextInput
          accessibilityLabel="login password"
          style={styles.input}
          secureTextEntry={true}
          onChangeText={(text) =>
            setInputs((curr) => {
              return { ...curr, password: text };
            })
          }
          placeholder="Enter password"
        />
      </View>
      <Button
        title="Log In"
        accessibilityRole="button"
        accessibilityLabel="Log in"
        onPress={() => {
          handleLogin()
            .then((uid) => {
              setUser({ uid: uid });
              navigation.navigate("Navigation");
            })
            .catch((err) => {
              console.log(err);
              setInputs((curr) => {
                return {
                  email: "Unable to log in",
                  password: "Please try again",
                };
              });
            });
        }}
      />
    </View>
  );
}
