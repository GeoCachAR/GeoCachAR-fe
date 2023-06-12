import { Text, TextInput, View, Button } from 'react-native';
import styles from '../StyleSheet';

export default function LogIn({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>GeoCachAR</Text>
      <Text style={styles.tagline}>Enter Log In Details</Text>
      <View>
        <Text style={styles.formText}>Enter email:</Text>
        <TextInput style={styles.input} placeholder="Enter email" />
        <Text style={styles.formText}>Enter password:</Text>
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          placeholder="Enter email"
        />
      </View>
      <Button
        title="Log In"
        accessibilityLabel="Log in"
        onPress={() => {
          navigation.navigate('GeoCachAR');
        }}
      />
    </View>
  );
}


