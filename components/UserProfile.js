import { Text, ScrollView, Button, View, Alert } from "react-native";
import styles from "../StyleSheet";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { deleteUser } from "../utils";

export default function UserProfile({ username, password }) {
  const [email, setEmail] = useState("arghhh@piratemail.com");
  // Password probably won't be kept in state like this, but just for setup/design purposes
  // These state may change or be moved and just set up here for set up
  const [currentMap, setMap] = useState("Australia");
  const [currentMapPercentage, setCurrentMapPercentage] = useState("20%");
  const [completedMaps, setCompletedMaps] = useState(["London ", "Manchester"]);
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.userProfileScroll}>
      <Text style={styles.userProfileEntry}>Username: {username}</Text>
      <View style={styles.userProfileBtnView}>
        <Button
          title="Update"
          onPress={() => {
            navigation.navigate("Change Username");
          }}
        />
      </View>
      <Text style={styles.userProfileEntry}>Email: {email}</Text>
      <View style={styles.userProfileBtnView}>
        <Button
          title="Update"
          onPress={() => Alert.alert("Please contact the developer")}
        />
      </View>
      <Text style={styles.userProfileEntry}>Password: {"********"}</Text>
      <View style={styles.userProfileBtnView}>
        <Button
          style={styles.homeBtnView}
          title="Update"
          onPress={() => {
            navigation.navigate("Change Password");
          }}
        />
      </View>
      <Button
        title="Delete Account"
        onPress={() => {
          return Alert.alert(
            "Delete your account?",
            "Are you sure you'd like to delete your account? This action is irreversible",
            [
              {
                text: "Yes",
                onPress: () => deleteUser(),
              },
              { text: "No", style: "cancel" },
            ],
            { cancelable: true }
          );
        }}
      />
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
