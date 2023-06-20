import { Text, TextInput, View, Button } from "react-native";
import styles from "../StyleSheet";

export default function SignUp({ navigation }) {
  return (
    <View style={styles.container} accessible={true}>
      <Text style={styles.logo}>GeoCachAR</Text>
      <Text style={styles.tagline}>Enter Sign Up Details</Text>
      <View accessible={true}>
        <Text style={styles.formText}>Enter username:</Text>
        <TextInput
          accessibilityLabel="sign up username"
          style={styles.input}
          placeholder="Enter username"
        />
        <Text style={styles.formText}>Enter email:</Text>
        <TextInput
          accessibilityLabel="sign up email address"
          style={styles.input}
          keyboardType="email-address"
          placeholder="Enter email"
        />
        <Text style={styles.formText}>Enter password:</Text>
        <TextInput
          accessibilityLabel="sign up password"
          style={styles.input}
          secureTextEntry={true}
          placeholder="Enter password"
        />
      </View>
      <Button
        title="Sign Up"
        accessibilityLabel="Sign Up"
        onPress={() => {
          navigation.navigate("Navigation");
        }}
      />
    </View>
  );
}
