import {
    Text,
    Button,
    TextInput,
    ScrollView,
    View,
    Linking,
    Alert,
} from "react-native";
import styles from "../StyleSheet";
import MapView, { Marker } from "react-native-maps";
import { useEffect, useState } from "react";
import { fetchMap, getUser } from "../utils";

export default function MapScreen({ mapId }) {
    mapId = "103";
    const [congratsMessage, setCongratsMessage] = useState("");
    const [map, setMap] = useState(false);
    const [wpNumbers, setWpNumbers] = useState(false);
    const [numberInputs, setNumberInputs] = useState();

    useEffect(() => {
        fetchMap(mapId)
            .then((newMap) => {
                setMap(newMap);
                return getUser();
            })
            .then((user) => {
                setWpNumbers(user.current_maps[mapId]);
                return user.current_maps[mapId];
            })
            .then((wpWaypoints) => {
                setNumberInputs(
                    Object.keys(wpWaypoints).reduce((numInputs, key) => {
                        return { ...numInputs, [key]: "" };
                    }, {})
                );
            });
    }, []);

    function handleAlert(wp) {
        return Alert.alert(`You pressed ${wp}`, map.waypoints[wp].description);
    }

    return (
        <>
            <Text style={styles.availableLocations}>San Francisco</Text>
            {map
                ? (() => (
                      <MapView
                          style={styles.map}
                          initialRegion={{
                              latitude: map.location.Latitude,
                              longitude: map.location.Longtitude,
                              latitudeDelta: map.location.LatDelta,
                              longitudeDelta: map.location.LonDelta,
                          }}
                      >
                          {Object.entries(map.waypoints).map(
                              ([index, waypoint]) => {
                                  return (
                                      <Marker
                                          key={index}
                                          onPress={() => {
                                              handleAlert(index);
                                          }}
                                          title={index}
                                          description=""
                                          coordinate={{
                                              latitude: waypoint.Latitude,
                                              longitude: waypoint.Longtitude,
                                          }}
                                      ></Marker>
                                  );
                              }
                          )}
                      </MapView>
                  ))()
                : ""}
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
                                  style={styles.mapScreenDetails}
                              >
                                  <Text style={styles.mapScreenNumber}>
                                      {index}
                                  </Text>
                                  <TextInput style={styles.mapScreenInput} />
                                  <View style={styles.mapScreenBtn}>
                                      <Button
                                          title={number ? "Done" : "Unlock"}
                                          onPress={() => {
                                              setWpNumbers((curr) => {
                                                  return {
                                                      ...curr,
                                                      [index]: !curr[index],
                                                  };
                                              });
                                          }}
                                      />
                                  </View>
                              </View>
                          );
                      })
                    : ""}
                <Button
                    title="Submit All Codes!"
                    onPress={() => {
                        return Object.values(wpNumbers).every((x) => x)
                            ? setCongratsMessage(
                                  "Congratulations! You cracked the code and completed the map!"
                              )
                            : setCongratsMessage("");
                    }}
                />
                <Text style={styles.testtest}>{congratsMessage}</Text>
            </ScrollView>
        </>
    );
}
