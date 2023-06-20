import { Text, ScrollView, Button, View, Alert } from "react-native";
import styles from "../StyleSheet";
import { useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { deleteUser } from "../utils";
import { uidContext } from "./Contexts";

export default function UserProfile() {
    const email = "Email not found - are you logged in";
    const currentMap = "not found";
    const currentMapPercentage = "not connected";
    const completedMaps = "not connected";

    const navigation = useNavigation();
    const { user, setUser } = useContext(uidContext);

    const handleLogoutPress = () => {
        setUser({});
        navigation.navigate("GeoCachAR");
    };

    return (
        <ScrollView style={styles.userProfileScroll}>
            <Text style={styles.userProfileEntry}>
                {/* {user.uid}  */}
                {"\n"}Username: {user.name}
            </Text>
            <View style={styles.userProfileBtnView}>
                <Button
                    title="Update"
                    onPress={() => {
                        navigation.navigate("Change Username");
                    }}
                />
            </View>
            <Text style={styles.userProfileEntry}>
                Email: {user.email ? user.email : email}
            </Text>
            <View style={styles.userProfileBtnView}>
                <Button
                    title="Update"
                    onPress={() => navigation.navigate("Change Email")}
                />
            </View>
            <Text style={styles.userProfileEntry}>Password: {"********"}</Text>
            <View style={styles.userProfileBtnView}>
                <Button
                    style={styles.homeBtnView}
                    title="Update"
                    onPress={() => {
                        console.log("Changing");
                    }}
                />
            </View>
            <View style={styles.userProfileDeleteBtnView}>
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
                <Button
                    title="Logout"
                    onPress={() => handleLogoutPress()}
                />
            </View>
        </ScrollView>
    );
}
