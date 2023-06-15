import { Text, View, Button, TextInput } from "react-native";
import styles from "../StyleSheet.js";
import { useState } from "react";
import { changePassword } from "../utils.js";

export default function ChangePassword({ password, setPassword }) {
    const [currPassword, setCurrPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [pClass, setPClass] = useState({
        currentPassword: true,
        newPassword: true,
        confirmPassword: true,
    });

    function handleChange(text, func) {
        func(text);
    }
    function handleSubmit() {
        setPClass({
            currentPassword: true,
            newPassword: true,
            confirmPassword: true,
        });
        if (currPassword !== password) {
            setPClass((currentP) => {
                return { ...currentP, currentPassword: false };
            });
        } else if (password === newPassword) {
            setPClass((currentP) => {
                return { ...currentP, newPassword: false };
            });
        }
        if (newPassword !== confirmPassword) {
            setPClass((currentP) => {
                return { ...currentP, confirmPassword: false };
            });
        }
        if (Object.values(pClass).every((x) => x)) {
            changePassword(newPassword)
                .then(() => {
                    setPassword(newPassword);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }

    return (
        <View>
            <Text style={styles.passwordTextFeild}>
                {password} {currPassword} {newPassword} {confirmPassword}
            </Text>

            <Text style={styles.passwordTextFeild}>Current Password: </Text>
            <TextInput
                style={true ? styles.passwordInputField : ""}
                onChangeText={(text) => handleChange(text, setCurrPassword)}
            ></TextInput>
            <Text
                style={
                    pClass.currentPassword
                        ? styles.passwordError
                        : styles.passwordIsError
                }
            >
                Incorrect Password
            </Text>

            <Text style={styles.passwordTextFeild}>New Password: </Text>
            <TextInput
                style={true ? styles.passwordInputField : ""}
                onChangeText={(text) => handleChange(text, setNewPassword)}
            ></TextInput>
            <Text
                style={
                    pClass.newPassword
                        ? styles.passwordError
                        : styles.passwordIsError
                }
            >
                New password can't be the same as current password
            </Text>

            <Text style={styles.passwordTextFeild}>Confirm Password: </Text>
            <TextInput
                style={true ? styles.passwordInputField : ""}
                onChangeText={(text) => handleChange(text, setConfirmPassword)}
            ></TextInput>
            <Text
                style={
                    pClass.confirmPassword
                        ? styles.passwordError
                        : styles.passwordIsError
                }
            >
                Passwords must match
            </Text>

            <Button
                title="Press me"
                onPress={handleSubmit}
            ></Button>
        </View>
    );
}
