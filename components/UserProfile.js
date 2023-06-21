import { Text, ScrollView, Button, View, Alert } from 'react-native';
import styles from '../StyleSheet';
import { useContext, useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { changePassword, mapReference } from '../utils';
import { uidContext } from './Contexts';

export default function UserProfile() {
  const [currentMapList, setCurrentMapList] = useState({ names: [], perc: [] });
  const [completedMapList, setCompletedMapList] = useState([]);

  const email = 'Email not found - are you logged in';

  const navigation = useNavigation();
  const { user, setUser } = useContext(uidContext);

  const handleLogoutPress = () => {
    setUser({});
    navigation.navigate('GeoCachAR');
  };

  const handlePasswordChange = () => {
    return changePassword(user.uid, user.email)
      .then(() => Alert.alert('Reset email has been sent'))
      .catch(() => Alert.alert('Reset email failed to send\nPlease try again'));
  };

  useEffect(() => {
    const propArr = [];
    const percArr = [];

    mapReference().then((mapRef) => {
      for (const property in user.current_maps) {
        propArr.push(mapRef[property]);
        const percent = Object.values(user.current_maps[property]);
        percArr.push((100 * percent.filter((x) => x).length) / percent.length);
      }
      setCurrentMapList({ names: propArr, perc: percArr });
    });
  }, [
    Object.keys(user.current_maps).length,
    Object.values(user.current_maps).reduce((sum, map) => {
      Object.values(map).forEach((wp) => {
        if (wp) {
          sum++;
        }
      });
      return sum;
    }, 0),
  ]);

  useEffect(() => {
    const compMapArr = [];

    mapReference().then((mapRef) => {
      for (const property in user.maps_completed) {
        compMapArr.push(mapRef[property]);
      }
      setCompletedMapList(compMapArr);
    });
  }, [Object.keys(user.maps_completed).length]);

  return (
    <ScrollView style={styles.userProfileScroll} accessible={true}>
      <Text style={styles.userProfileEntry}>
        {'\n'}Username: {user.name}
      </Text>
      <View style={styles.userProfileBtnView} accessible={true}>
        <Button
          accessibiltyRole="button"
          accessibilityLabel="Click to change username"
          title="Update"
          onPress={() => {
            navigation.navigate('Change Username');
          }}
        />
      </View>
      <Text style={styles.userProfileEntry}>
        Email: {user.email ? user.email : email}
      </Text>
      <View style={styles.userProfileBtnView} accessible={true}>
        <Button
          accessibiltyRole="button"
          accessibilityLabel="Click to change email"
          title="Update"
          onPress={() => navigation.navigate('Change Email')}
        />
      </View>
      <Text style={styles.userProfileEntry}>Password: {'********'}</Text>
      <View style={styles.userProfileBtnView} accessible={true}>
        <Button
          accessibiltyRole="button"
          accessibilityLabel="Click to change password"
          accessibiltyHint="Click to receive an email to change your password"
          style={styles.homeBtnView}
          title="Update"
          onPress={() => {
            return Alert.alert(
              'Reset your password?',
              'Send a password reset email to reset your password',
              [
                {
                  text: 'reset',
                  onPress: () => handlePasswordChange(),
                },
                {
                  text: 'cancel',
                  style: 'cancel',
                },
              ],
              { cancelable: true }
            );
          }}
        />
      </View>
      <View style={styles.userProfileDeleteBtnView} accessible={true}>
        <Button
          accessibilityLabel="Delete account"
          accessibiltyRole="button"
          accessibiltyHint="Will delete your account if you proceed."
          title="Delete Account"
          onPress={() => {
            return Alert.alert(
              'Delete your account?',
              "Are you sure you'd like to delete your account? This action is irreversible",
              [
                {
                  text: 'Yes',
                  onPress: () => navigation.navigate('Delete User'),
                },
                { text: 'No', style: 'cancel' },
              ],
              { cancelable: true }
            );
          }}
        />
      </View>
      <Text style={styles.userProfileHeader}>Currently Playing:</Text>
      <View style={styles.userProfileEntry}>
        {currentMapList.names.length > 0
          ? currentMapList.names.map((map, index) => {
              return (
                <Text key={map} style={styles.cpText}>
                  {`${map} - ${currentMapList.perc[index]}% \n`}
                </Text>
              );
            })
          : ''}
      </View>
      {/* <View accessible={true} style={styles.userProfileBtnView}>
        <Button title="Continue" />
      </View> */}
      <Text style={styles.userProfileHeader}>Completed Maps:</Text>
      <View style={styles.userProfileEntry}>
        {completedMapList.map((map) => {
          return (
            <Text key={map} style={styles.cpText}>
              {map + '\n'}
            </Text>
          );
        })}
      </View>
      <View accessible={true} style={styles.userProfileBtnView}>
        <Button
          accessibilityLabel="Logout"
          accessibiltyRole="button"
          accessibiltyHint="Will log you out of the app"
          title="Logout"
          onPress={() => handleLogoutPress()}
        />
      </View>
    </ScrollView>
  );
}
