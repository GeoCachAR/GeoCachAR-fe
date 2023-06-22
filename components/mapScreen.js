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
import { completeMap, fetchMap, mapReference, patchCode } from "../utils";
import { uidContext } from "./Contexts.js";

export default function MapScreen({ route, navigation }) {
  const { mapId } = route.params;
  const [map, setMap] = useState(false);
  const [wpNumbers, setWpNumbers] = useState(false);
  const [enteredCode, setEnteredCode] = useState("");
  const { user, setUser } = useContext(uidContext);
  useEffect(() => {
    fetchMap(mapId).then((newMap) => {
      setMap(newMap);
      setWpNumbers(user.current_maps[mapId]);
    });
  }, []);

  const handlePress = () => {
    if (Object.values(wpNumbers).every((x) => x)) {
      completeMap(user.uid, mapId)
        .then(() => {
          return mapReference;
        })
        .then((mapRef) => {
          setUser((curr) => {
            const newCompletedMaps = {
              ...curr.maps_completed,
              [mapId]: mapRef[mapId],
            };
            const newCurrentMaps = { ...curr.current_maps };
            delete newCurrentMaps[mapId];
            return {
              ...curr,
              current_maps: newCurrentMaps,
              maps_completed: newCompletedMaps,
            };
          });
          Alert.alert(
            "Congratulations!!! You've cracked the codes and completed map!",
            // 'What would you like to do now?',
            "",
            [
              {
                text: "Return to Home",
                onPress: () => navigation.navigate("Home"),
              },
              // {
              //   text: 'View other maps',
              //   onPress: () => navigation.navigate('Maps'),
              // },
            ],
            { cancelable: true }
          );
        })
        .catch(() => {
          return Alert.alert("Error, unable to complete", "Please try again");
        });
    } else {
      Alert.alert(
        "You've not yet unlocked all the codes...",
        "",
        [
          {
            text: "Resume",
            style: "cancel",
          },
        ],
        { cancelable: true }
      );
    }
  };
  const handleAlert = (wp) => {
    return Alert.alert(`Clue ${Number(wp) + 1}`, map.waypoints[wp].description);
  };

  return (
    <>
      <Text style={styles.availableLocations}>{map.mapName}</Text>
      {map ? (
        (() => (
          <MapView
            accessibilityLabel={`Map view of ${map.mapName}`}
            accessible={true}
            style={styles.map}
            initialRegion={{
              latitude: map.location.latitude,
              longitude: map.location.longitude,
              latitudeDelta: map.location.latDelta,
              longitudeDelta: map.location.lonDelta,
            }}
          >
            {Object.entries(map.waypoints).map(([index, waypoint]) => {
              return (
                <Marker
                  accessibilityLabel="Waypoint on the map"
                  accessibilityHint="Will give the hint of the waypoint selected"
                  key={index}
                  onPress={() => {
                    handleAlert(index);
                  }}
                  title={String(Number(index) + 1)}
                  description=""
                  coordinate={{
                    latitude: waypoint.latitude,
                    longitude: waypoint.longitude,
                  }}
                ></Marker>
              );
            })}
          </MapView>
        ))()
      ) : (
        <Text>map loading</Text>
      )}
      <View
        style={styles.launchCamera}
        accessible={true}
      >
        <Button
          accessibilityLabel="Launch Camera"
          accessibilityHint="Will launch your default browser and ask for the camera to be enabaled"
          title="Launch Camera"
          onPress={() => {
            Linking.openURL(map.arUrl);
          }}
        />
      </View>
      <ScrollView
        style={styles.userProfileScroll}
        accessible={true}
      >
        {wpNumbers
          ? Object.entries(wpNumbers).map(([index, isUnlocked]) => {
              return (
                <View
                  key={index}
                  style={styles.mapScreenDetails}
                  accessible={true}
                >
                  <Text style={styles.mapScreenNumber}>
                    {Number(index) + 1}
                  </Text>
                  <TextInput
                    accessibilityLabel="Enter your numeric code"
                    maxLength={3}
                    placeholder={
                      isUnlocked ? "Unlocked" : "Submit your code..."
                    }
                    keyboardType="numeric"
                    style={styles.mapScreenInput}
                    onChangeText={(value) => setEnteredCode(value)}
                    readOnly={isUnlocked}
                    value={isUnlocked ? "" : undefined}
                  />
                  <View
                    style={styles.mapScreenBtn}
                    accessible={true}
                  >
                    <Button
                      accessibilityLabel="Press to save your numeric code"
                      title={isUnlocked ? "Done" : "Unlock"}
                      disabled={isUnlocked}
                      onPress={() => {
                        setUser((curr) => {
                          if (enteredCode.length !== 3) return curr;
                          if (enteredCode == map.waypoints[index].code) {
                            const newWp = {
                              ...wpNumbers,
                              [index]: true,
                            };
                            const newCurrentMaps = {
                              ...curr.current_maps,
                              [mapId]: newWp,
                            };
                            return {
                              ...curr,
                              current_maps: newCurrentMaps,
                            };
                          }
                          return curr;
                        });
                        setWpNumbers((curr) => {
                          if (enteredCode.length !== 3) {
                            Alert.alert("Please enter a 3 digit code");
                            return curr;
                          }
                          if (enteredCode == map.waypoints[index].code) {
                            patchCode(
                              {
                                ...curr,
                                [index]: true,
                              },

                              mapId,
                              user.uid
                            ).then(() => {
                              Alert.alert(
                                "Correct code entered!",
                                "",
                                [
                                  {
                                    text: "ok",
                                    style: "cancel",
                                  },
                                ],
                                {
                                  cancelable: true,
                                }
                              );
                            });
                            return {
                              ...curr,
                              [index]: true,
                            };
                          }
                          Alert.alert(
                            "Sorry, wrong code, try again.",
                            "",
                            [
                              {
                                text: "ok",
                                style: "cancel",
                              },
                            ],
                            { cancelable: true }
                          );
                          return curr;
                        });
                      }}
                    />
                  </View>
                </View>
              );
            })
          : ""}
        <View
          style={styles.submitAllCodesView}
          accessible={true}
        >
          <Button
            accessibilityLabel="Press to submit all codes"
            accessibilityHint="Will submit all codes and let you know if they were correct"
            title="Submit All Codes!"
            onPress={() => {
              handlePress();
            }}
          />
        </View>
      </ScrollView>
    </>
  );
}
