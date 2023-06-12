import { Text, View, Button } from 'react-native';
import styles from '../StyleSheet';

export default function LandingPage({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>GeoCachAR</Text>
      <Text style={styles.tagline}>
        Can you break the code {'\n'} to unlock the treasure
      </Text>
      <View style={styles.button}>
        <Button
          title="Log In"
          accessibilityLabel="Log in"
          onPress={() => {
            navigation.navigate('Log In');
          }}
        />
      </View>
      <View style={styles.button}>
        <Button
          style={styles.button}
          title="Sign Up"
          accessibilityLabel="Sign in"
          onPress={() => {
            navigation.navigate('Sign Up');
          }}
        ></Button>
      </View>
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   button: {
//     paddingTop: 30,
//   },
//   logo: {
//     fontSize: 40,
//     fontWeight: 600,
//   },
//   tagline: {
//     margin: 16,
//     fontSize: 30,
//   },
// });
