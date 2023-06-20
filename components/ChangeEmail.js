import { Text, View, Button, TextInput, Alert } from 'react-native';
import styles from '../StyleSheet.js';
import { useState, useContext } from 'react';
import { changeEmail, changePassword } from '../utils.js';
import { uidContext } from './Contexts.js';

export default function ChangeEmail() {
  const [newEmail, setNewEmail] = useState('');
  const [password, setPassword] = useState('');
  const { user, setUser } = useContext(uidContext);
  const [error, setError] = useState(false);

  function handleChange(text, func) {
    func(text);
  }
  function handleSubmit() {
    setError(false);
    return changeEmail(newEmail, user.email, user.uid, password)
      .then(() => {
        setNewEmail('');
        setPassword('');
        setUser((curr) => {
          return { ...curr, email: newEmail };
        });
        Alert.alert('Your email has been updated.')
      })
      .catch(() => {
        setError(true);
      });
  }

  return (
    <View>
      <Text style={styles.passwordTextField}>Change your email:</Text>

      <Text style={styles.passwordTextField}>New Email: </Text>
      <TextInput
        style={true ? styles.passwordInputField : ''} value={newEmail}
        onChangeText={(text) => handleChange(text, setNewEmail)}
      ></TextInput>
      <Text></Text>

      <Text style={styles.passwordTextField}>Enter your password: </Text>
      <TextInput
        secureTextEntry={true}
        style={true ? styles.passwordInputField : ''} value={password}
        onChangeText={(text) => handleChange(text, setPassword)}
      ></TextInput>
      <Text style={styles.passwordTextField}>
        {error ? 'Incorrect Email or Password \nPlease try again' : ''}
        {/* {(() => {
          if (!error) return '';
          switch (error) {
            case 'Incorrect password':
            case 'Email already in use':
            case 'Invalid password':
              return error;
            default:
              return 'Error sending request';
          }
        })()} */}
      </Text>
      <View style={styles.userProfileDeleteBtnView}>
        <Button title="Update Email" onPress={handleSubmit}></Button>
      </View>
    </View>
  );
}
