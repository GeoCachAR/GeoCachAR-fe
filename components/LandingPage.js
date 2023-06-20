import { Text, View, Button } from "react-native";
import styles from "../StyleSheet";

export default function LandingPage({ navigation }) {
  return (
    <View style={styles.container} accessible={true}>
      <Text style={styles.logo}>GeoCachAR</Text>
      <Text style={styles.tagline}>
        Can you break the code {"\n"} to unlock the treasure
      </Text>
      <View style={styles.button}>
        <Button
          title="Log In"
          accessibilityLabel="Log in"
          onPress={() => {
            navigation.navigate("Log In");
          }}
        />
      </View>
      <View style={styles.button} accessible={true}>
        <Button
          style={styles.button}
          title="Sign Up"
          accessibilityLabel="Sign Up"
          onPress={() => {
            navigation.navigate("Sign Up");
          }}
        ></Button>
      </View>
    </View>
  );
}
