import { Text, TextInput, View, Button } from "react-native";
import styles from "../StyleSheet";

export default function SignUp({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>GeoCachAR</Text>
      <Text style={styles.tagline}>Enter Sign Up Details</Text>
      <View>
        <Text style={styles.formText}>Enter username:</Text>
        <TextInput style={styles.input} placeholder="Enter username" />
        <Text style={styles.formText}>Enter email:</Text>
        <TextInput style={styles.input} placeholder="Enter email" />
        <Text style={styles.formText}>Enter password:</Text>
        <TextInput
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
