import { Text, TextInput, View, Button, Alert } from "react-native";
import { useContext, useState } from "react";
import styles from "../StyleSheet";
import { authenticate, getUser } from "../utils";
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
    <View
      style={styles.container}
      accessible={true}
    >
      <Text style={styles.logo}>GeoCachAR</Text>
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
      <Text
        accessibilityLabel="reset password"
        style={styles.passwordReset}
        onPress={() => navigation.navigate("Reset Password")}
      >
        Forgotten your password?{"\n"}click here to reset
      </Text>
      <Button
        title="Log In"
        accessibilityRole="button"
        accessibilityLabel="Log in"
        onPress={() => {
          if (inputs.email === "") return Alert.alert("Please enter an email");
          if (inputs.password === "")
            return Alert.alert("Please enter a password");
          handleLogin()
            .then((uid) => {
              return getUser(uid);
            })
            .then((user) => {
              setUser(user);
              navigation.navigate("Navigation");
            })
            .catch((err) => {
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
