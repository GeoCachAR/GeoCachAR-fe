import { Text, ScrollView, Button, View } from "react-native";
import styles from "../StyleSheet";
import { useState } from "react";

export default function UserProfile() {
  const [username, setUsername] = useState("Captain Hook");
  const [email, setEmail] = useState("arghhh@piratemail.com");
  // Password probably won't be kept in state like this, but just for setup/design purposes
  const [password, setPassword] = useState("*********");
  // These state may change or be moved and just set up here for set up
  const [currentMap, setMap] = useState("Australia");
  const [currentMapPercentage, setCurrentMapPercentage] = useState("20%");
  const [completedMaps, setCompletedMaps] = useState(["London ", "Manchester"]);

  return (
    <ScrollView style={styles.userProfileScroll}>
      <Text style={styles.userProfileEntry}>Username: {username}</Text>
      <View style={styles.userProfileBtnView}>
        <Button title="Update" />
      </View>
      <Text style={styles.userProfileEntry}>Email: {email}</Text>
      <View style={styles.userProfileBtnView}>
        <Button title="Update" />
      </View>
      <Text style={styles.userProfileEntry}>Password: {password}</Text>
      <View style={styles.userProfileBtnView}>
        <Button style={styles.homeBtnView} title="Update" />
      </View>
      <Text style={styles.userProfileHeader}>Currently Playing:</Text>
      <Text style={styles.userProfileEntry}>
        {currentMap} {currentMapPercentage}
      </Text>
      <View style={styles.userProfileBtnView}>
        <Button title="Continue" />
      </View>
      <Text style={styles.userProfileHeader}>Completed Maps:</Text>
      <Text style={styles.userProfileEntry}>{completedMaps}</Text>
      <View style={styles.userProfileBtnView}>
        <Button title="Logout" />
      </View>
    </ScrollView>
  );
}
