import { Text, View, Button, TextInput } from "react-native";
import styles from "../StyleSheet.js";
import { useState } from "react";
import { changeUsername } from "../utils.js";

export default function ChangeUsername({ username, setUsername }) {
    const [newUsername, setNewUsername] = useState("");

    function handleChange(text) {
        setNewUsername(text);
    }
    function handlePress() {
        const currUsername = username;
        setUsername(newUsername);
        changeUsername(newUsername).catch(() => setUsername(currUsername));
    }
    return (
        <View>
            <Text style={styles.cuText}>Current username: {username}</Text>
            <TextInput
                style={styles.cuText}
                placeholder="New username"
                onChangeText={handleChange}
            ></TextInput>
            <View style={styles.cuButton}>
                <Button
                    title="change username"
                    onPress={handlePress}
                ></Button>
            </View>
        </View>
    );
}
