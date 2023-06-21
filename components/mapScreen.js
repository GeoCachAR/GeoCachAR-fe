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
import { useContext, useEffect, useState } from "react";
import { completeMap, fetchMap, patchCode } from "../utils";
import { uidContext } from "./Contexts.js";

export default function MapScreen({ route, navigation }) {
    const { mapId } = route.params;
    const [map, setMap] = useState(false);
    const [wpNumbers, setWpNumbers] = useState(false);
    const [enteredCode, setEnteredCode] = useState("");
    const { user } = useContext(uidContext);

    useEffect(() => {
        fetchMap(mapId).then((newMap) => {
            setMap(newMap);
            setWpNumbers(user.current_maps[mapId]);
        });
    }, []);

    const handlePress = () => {
            if (Object.values(wpNumbers).every(x => x)) {
            completeMap(user.uid, mapId).then(() => {
                Alert.alert('Congratulations!!! You\'ve cracked the codes and completed map!', 'What would you like to do now?', [ {
                    text: 'Return to Home',
                    onPress: () => navigation.navigate('Home'),
                  }, {
                    text: 'View other maps',
                    onPress: () => navigation.navigate('Maps'),
                  }], {cancelable: true})
            }).catch(() => {
                return Alert.alert("Error, unable to complete", "Please try again")
            }
            )} else {
                Alert.alert('You\'ve not yet unlocked all the codes...', '', [ {
                    text: 'Resume',
                    style: 'cancel' }
                ], {cancelable: true})
            }
    }

    function handleAlert(wp) {
        return Alert.alert(`Clue ${Number(wp)+1}`, map.waypoints[wp].description);
    }

    return (
        <>
            <Text style={styles.availableLocations}>{map.mapName}</Text>
            {map ? (
                (() => (
                    <MapView
                        style={styles.map}
                        initialRegion={{
                            latitude: map.location.latitude,
                            longitude: map.location.longitude,
                            latitudeDelta: map.location.latDelta,
                            longitudeDelta: map.location.lonDelta,
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
                                        title={String(Number(index)+1)}
                                        description=""
                                        coordinate={{
                                            latitude: waypoint.latitude,
                                            longitude: waypoint.longitude,
                                        }}
                                    ></Marker>
                                );
                            }
                        )}
                    </MapView>
                ))()
            ) : (
                <Text>map loading</Text>
            )}
            <View style={styles.launchCamera}>
                <Button
                    title="Launch Camera"
                    onPress={() => {
                        Linking.openURL(map.arUrl);
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
                                      {Number(index)+1}
                                  </Text>
                                  <TextInput
                                      maxLength={3}
                                      placeholder="submit your code..."
                                      keyboardType="numeric"
                                      style={styles.mapScreenInput}
                                      onChangeText={(value) =>
                                          setEnteredCode(value)
                                      }
                                  />
                                  <View style={styles.mapScreenBtn}>
                                      <Button
                                          title={number ? "Done" : "Unlock"}
                                          onPress={() => {
                                              setWpNumbers((curr) => {
                                                  if (
                                                      enteredCode ==
                                                      map.waypoints[index].code
                                                  ) {
                                                      patchCode(
                                                          {
                                                              ...curr,
                                                              [index]: true,
                                                          },
                                                          mapId,
                                                          user.uid
                                                      ).then(()=>{
                                                Alert.alert('Correct code entered!', '', [ {
                                                    text: 'ok',
                                                    style: 'cancel',
                                                  }], {cancelable: true})
                                              });
                                                      return {
                                                          ...curr,
                                                          [index]: true,
                                                      };
                                                  }
                                                  Alert.alert('Sorry, wrong code, try again.', '', [ {
                                                    text: 'ok',
                                                    style: 'cancel',
                                                  }], {cancelable: true})
                                                  return curr;
                                                  
                                              })
                                          }}
                                      />
                                  </View>
                              </View>
                          );
                      })
                    : ""}
                <View style={styles.submitAllCodesView}>
                    <Button
                        title="Submit All Codes!"
                        onPress={() => {
                            handlePress()
                        }}
                    />
                </View>
            </ScrollView>
        </>
    );
}
