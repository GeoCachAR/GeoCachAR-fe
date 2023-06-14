import { Text, View, Button, TextInput } from "react-native";
import styles from "../StyleSheet.js";
import { useState } from "react";
import { changePassword } from "../utils.js";

export default function ChangePassword({ password, setPassword }) {
    const [currPassword, setCurrPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [pClass, setPClass] = useState(true);

    function handleChange(text, func) {
        func(text);
    }
    function handleSubmit() {
        setPClass(true);
        if (newPassword !== confirmPassword) {
            setPClass(false);
            console.log("Passwords must match");
        } else if (password === newPassword) {
            setPClass(false);
            console.log("New password can't be the same as current password");
        }
        changePassword(newPassword)
            .then(() => {
                setPassword(newPassword);
            })
            .catch(() => {});
    }

    return (
        <View>
            <Text style={styles.passwordTextFeild}>
                {password} {currPassword} {newPassword} {confirmPassword}
            </Text>

            <Text style={pClass ? styles.passwordError : ""}>
                Current Password:{" "}
            </Text>
            <TextInput
                style={pClass ? styles.passwordInputField : ""}
                onChangeText={(text) => handleChange(text, setCurrPassword)}
            ></TextInput>
            <Text style={pClass ? styles.passwordError : ""}>
                This is stext that will be hidden mmaybe
            </Text>

            <Text style={styles.passwordTextFeild}>New Password: </Text>
            <TextInput
                style={pClass ? styles.passwordInputField : ""}
                onChangeText={(text) => handleChange(text, setNewPassword)}
            ></TextInput>
            <Text style={pClass ? styles.passwordError : ""}>
                This is stext that will be hidden mmaybe
            </Text>

            <Text style={styles.passwordTextFeild}>Confirm Password: </Text>
            <TextInput
                style={pClass ? styles.passwordInputField : ""}
                onChangeText={(text) => handleChange(text, setConfirmPassword)}
            ></TextInput>
            <Text style={pClass ? styles.passwordError : ""}>
                This is stext that will be hidden mmaybe
            </Text>

            <Button
                title="Press me"
                onPress={handleSubmit}
            ></Button>
        </View>
    );
}
