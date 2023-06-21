import { Text, View, Image, Button } from 'react-native';
import styles from '../StyleSheet';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();

  return (
    <View style={styles.homeContainer} accessible={true}>
      <Image
        accessibilityRole="image"
        accessibilityLabel="A picture of a cartoon pirate"
        style={styles.homeImage}
        accessible={true}
        source={require('../assets/pirate.jpeg')}
      ></Image>
      <Text style={styles.logo}>Welcome to GeoCachAR</Text>
      <Text style={styles.taglineHome}>What would you like to do...</Text>
      {/* <View style={styles.homeBtnView} accessible={true}>
        <Button
          accessibilityRole="button"
          accessibilityLabel="resume current treasure hunt"
          accessibilityHint="Will bring you to your current treasure hunt."
          title="Resume current treasure hunt"
        />
      </View> */}
      <View style={styles.homeBtnView} accessible={true}>
        <Button
          accessibilityRole="button"
          accessibilityLabel="View all treasure hunts"
          accessibilityHint="Will Show a list of all available treasure hunts."
          title="View all treasure hunts"
          onPress={() => navigation.navigate('Maps')}
        />
      </View>
      <View style={styles.homeBtnView} accessible={true}>
        <Button
          accessibilityRole="button"
          accessibilityLabel="Profile"
          accessibilityHint="Will navigate you, to your profile."
          title="View my profile"
          onPress={() => navigation.navigate('Profile')}
        />
      </View>
    </View>
  );
}
