import {
    Text,
    Button,
    TextInput,
    ScrollView,
    View,
    Linking,
} from "react-native";
import styles from "../StyleSheet";
import MapView, { Marker } from "react-native-maps";
import { useEffect, useState } from "react";
import { fetchMap } from "../utils";

const testMapScreenArray = ["1", "2", "3", "4", "5", "6", "7", "8"];

export default function MapScreen({ mapId }) {
    mapId = "100";
    const [congratsMessage, setCongratsMessage] = useState("");
    const [map, setMap] = useState(false);

    useEffect(() => {
        fetchMap(mapId).then((newMap) => {
            console.log(newMap);
            setMap(newMap);
        });
    }, []);

    return (
        <>
            <Text style={styles.availableLocations}>San Francisco</Text>

            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >
                {map
                    ? map.waypoints.map((waypoint, index) => {
                          return (
                              <Marker
                                  key={index}
                                  title={waypoint.title}
                                  description={waypoint.description}
                                  coordinate={{
                                      latitude: waypoint.Latitude,
                                      longitude: waypoint.Longtitude,
                                  }}
                              ></Marker>
                          );
                      })
                    : ""}
            </MapView>
            <View style={styles.launchCamera}>
                <Button
                    title="Launch Camera"
                    onPress={() => {
                        Linking.openURL("https://test-geocachar.netlify.app");
                    }}
                />
            </View>
            <ScrollView style={styles.userProfileScroll}>
                {testMapScreenArray.map((number, index) => {
                    return (
                        <View
                            key={index}
                            style={styles.mapScreenDetails}
                        >
                            <Text style={styles.mapScreenNumber}>{number}</Text>
                            <TextInput style={styles.mapScreenInput} />
                            <View style={styles.mapScreenBtn}>
                                <Button
                                    title="Unlock"
                                    onPress={() => {}}
                                />
                            </View>
                        </View>
                    );
                })}
                <Button
                    title="Submit All Codes!"
                    onPress={() => {
                        setCongratsMessage(
                            "Congratulations! You cracked the code and completed the map!"
                        );
                    }}
                />
                <Text>{congratsMessage}</Text>
            </ScrollView>
        </>
    );
}
