import { StyleSheet, Text, View, Button } from 'react-native';

export default function LandingPage() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>GeoCachAR</Text>
        <Text style={styles.tagline}>
          Can you break the code {'\n'} to unlock the treasure
        </Text>
      <View style={styles.button}>
        <Button title="Log In" accessibilityLabel="Log in" />
      </View>
      <View style={styles.button}>
        <Button
          style={styles.button}
          title="Sign Up"
          accessibilityLabel="Sign in"
        ></Button>
      </View>
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
  button: {
    paddingTop: 30,
  },
  logo: {
    fontSize: 40,
    fontWeight: 600,
  },
  tagline: {
    margin: 16,
    fontSize: 30,
  }
});
