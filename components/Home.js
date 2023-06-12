import { Text, View, Image, Button } from 'react-native';

import styles from '../StyleSheet';

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
        <Button title="View all treasure hunts"/>
        <Button title="View my profile" />
      </View>
  );
}