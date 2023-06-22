import { Text, View, Button, TextInput, Alert } from 'react-native';
import styles from '../StyleSheet.js';
import { useState, useContext } from 'react';
import { deleteUser } from '../utils.js';
import { uidContext } from './Contexts.js';

export default function DeleteUser({ navigation }) {
  const [password, setPassword] = useState('');
  const { user, setUser } = useContext(uidContext);

  const handlePress = () => {
    return deleteUser(user.uid, user.email, password)
      .then(() => {
        setUser({ current_maps: [], maps_completed: [] });
        navigation.navigate('GeoCachAR');
      })
      .catch((err) => {
        console.log(err);
        return Alert.alert(
          'Error deleting account',
          'Please check your password is correct',
          [],
          { cancelable: true }
        );
      });
  };

  return (
    <View>
      <Text style={styles.passwordTextField}>Delete your account</Text>
      <Text style={styles.passwordTextField}>
        Enter your password below to delete your account:{' '}
      </Text>
      <TextInput
        style={styles.passwordInputField}
        placeholder="Enter password..."
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry={true}
      />
      <View style={styles.userProfileDeleteBtnView}>
        <Button
          title="delete my account"
          onPress={() =>
            Alert.alert(
              'Are you sure?',
              '',
              [
                {
                  text: 'Yes',
                  onPress: () => handlePress(),
                },
                { text: 'No', style: 'cancel' },
              ],
              { cancelable: true }
            )
          }
        ></Button>
      </View>
    </View>
  );
}
