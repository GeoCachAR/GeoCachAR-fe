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
import { fetchMap, getUser } from "../utils";


export default function MapScreen({ mapId }) {
    mapId = "100";
    const [congratsMessage, setCongratsMessage] = useState("");
    const [map, setMap] = useState(false);
    const [wpNumbers, setWpNumbers] = useState(false)
    const [numberInputs, setNumberInputs] = useState()

    useEffect(() => {
        fetchMap(mapId).then((newMap) => {
            setMap(newMap);
            return getUser()        
        })
       .then((user) => {
          setWpNumbers(user.current_maps[mapId])
          return user.current_maps[mapId]
        }).then((wpWaypoints)=> {
          setNumberInputs(Object.keys(wpWaypoints).reduce((numInputs, key) => {
          return {...numInputs,[key]:""}
        }, {}))})
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
                    ? Object.entries(map.waypoints).map(([index, waypoint]) => {
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
                {wpNumbers
                  ? Object.entries(wpNumbers).map(([index, number]) => {
                    return (
                        <View
                            key={index}
                            style={styles.mapScreenDetails}>
                            <Text style={styles.mapScreenNumber}>{number ? 'Done' : ""}</Text>
                            <TextInput style={styles.mapScreenInput} />
                            <View style={styles.mapScreenBtn}>
                                <Button
                                    title="Unlock"
                                    onPress={() => {}}
                                />
                            </View>
                        </View>
                    );
                }): ""}
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
