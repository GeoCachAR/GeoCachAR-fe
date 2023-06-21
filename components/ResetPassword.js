import { View, Text, TextInput, Button, Alert } from 'react-native';
import styles from '../StyleSheet';
import { useState } from 'react';
import { changePassword } from '../utils';

export default function ResetPassword() {
  const [email, setEmail] = useState('');

  return (
    <View>
      <Text style={styles.passwordTextField}>Reset password</Text>
      <Text style={styles.passwordTextField}>
        Enter your email below to receive a password reset email:{' '}
      </Text>
      <TextInput
        style={styles.passwordInputField}
        placeholder="Enter email..."
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
      <View style={styles.userProfileDeleteBtnView}>
        <Button
          title="send password reset"
          onPress={() => {
            changePassword(null, email)
              .then(() => {
                setEmail('');
              })
              .catch(() => Alert.alert('Please enter a valid email'));
          }}
        ></Button>
      </View>
    </View>
  );
}
