import { Text, Button, ScrollView, View } from "react-native";
import styles from "../StyleSheet";
import { useNavigation } from "@react-navigation/native";

export default function MapList() {
    const navigation = useNavigation();
    const locations = [
        "London",
        "Sheffield",
        "Hastings",
        "Belfast",
        "Manchester",
        "Liverpool",
    ];
    return (
        <ScrollView>
            <Text style={styles.availableLocations}>Available Locations</Text>
            {locations.map((location, index) => {
                return (
                    <View
                        key={index}
                        style={styles.locationButtons}
                    >
                        <Button
                            title={location}
                            onPress={() => {
                                navigation.navigate("Map Screen");
                            }}
                        />
                    </View>
                );
            })}
        </ScrollView>
    );
}
