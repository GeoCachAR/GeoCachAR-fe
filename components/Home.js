import { Text, View, Image, Button } from 'react-native';
import styles from '../StyleSheet';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();

  return (
    <View style={styles.homeContainer}>
      <Image
        style={styles.homeImage}
        source={require('../assets/pirate.jpeg')}
      ></Image>
      <Text style={styles.logo}>Welcome to GeoCachAR</Text>
      <Text style={styles.taglineHome}>What would you like to do...</Text>
      <View style={styles.homeBtnView}>
        <Button title="Resume current treasure hunt" />
      </View>
      <View style={styles.homeBtnView}>
        <Button
          title="View all treasure hunts"
          onPress={() => navigation.navigate('Maps')}
        />
      </View>
      <View style={styles.homeBtnView}>
        <Button
          title="View my profile"
          onPress={() => navigation.navigate('Profile')}
        />
      </View>
    </View>
  );
}
