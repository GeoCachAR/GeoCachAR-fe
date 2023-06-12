import { Text, View, Image, Button } from 'react-native';
import { Link } from '@react-navigation/native';
import styles from '../StyleSheet';
import MapList from './MapList';

export default function Home() {

  return (
    <View style={styles.homeContainer}>
      <Image
        style={styles.homeImage}
        source={require('../assets/pirate.jpeg')}
      ></Image>
      <Text style={styles.logo}>Welcome to GeoCachAR</Text>
      <Text style={styles.taglineHome}>What would you like to do...</Text>
      <Button title="Resume current treasure hunt" />
      <Link to={{ screen: 'Maps' }}>View all treasure hunts</Link>
      <Button title="View my profile" />
    </View>
  );
}