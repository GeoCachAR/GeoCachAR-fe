import { Text, View, Button, TextInput, Alert } from "react-native";
import styles from "../StyleSheet.js";
import { useState, useContext } from "react";
import { changeUsername } from "../utils.js";
import { uidContext } from "./Contexts.js";

export default function ChangeUsername() {
  const [newUsername, setNewUsername] = useState("");
  const { user, setUser } = useContext(uidContext);

  function handleChange(text) {
    setNewUsername(text);
  }
  function handlePress() {
    if (newUsername === "") return Alert.alert("Please enter a username");
    const currUsername = user.name;
    setUser((curr) => {
      return { ...curr, name: newUsername };
    });
    changeUsername(user.uid, newUsername).catch(() =>
      setUser((curr) => {
        return { ...curr, name: currUsername };
      })
    );
  }
  return (
    <View accessible={true}>
      <Text style={styles.cuText}>
        Current username: {"\n"}
        {user.name}
      </Text>
      <TextInput
        accessibilityLabel="input to enter new username"
        style={styles.passwordInputField}
        placeholder="New username"
        onChangeText={handleChange}
      ></TextInput>
      <View
        style={styles.userProfileDeleteBtnView}
        accessible={true}
      >
        <Button
          accessibiltyRole="button"
          accessibilityLabel="change username"
          accessibilityHint="Will change your username"
          title="change username"
          onPress={handlePress}
        ></Button>
      </View>
    </View>
  );
}
