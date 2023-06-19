import { Text, Button, ScrollView, View } from "react-native";
import styles from "../StyleSheet";
import { useNavigation } from "@react-navigation/native";
import { fetchMapList } from "../utils";
import { useEffect, useState } from "react";

export default function MapList() {
    const navigation = useNavigation();
    const [mapList, setMapList] = useState({});
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        fetchMapList().then((data) => setMapList(data.maps));
    }, []);

    useEffect(() => {
        const locationsArr = [];
        for (const property in mapList) {
            locationsArr.push({
                location: mapList[property].mapLocation,
                name: mapList[property].mapName,
                key: property,
            });
        }
        setLocations(locationsArr);
    }, [Object.keys(mapList).length]);

    return (
        <ScrollView>
            <Text style={styles.availableLocations}>Available Locations</Text>

            {locations.length !== 0
                ? locations.map((location) => {
                      return (
                          <View
                              key={location.key}
                              style={styles.locationButtons}
                          >
                              <Button
                                  title={
                                      location.location +
                                      " " +
                                      "-" +
                                      " " +
                                      location.name
                                  }
                                  onPress={() => {
                                      navigation.navigate("Map Screen", {
                                          mapId: location.key,
                                      });
                                  }}
                              />
                          </View>
                      );
                  })
                : ""}
        </ScrollView>
    );
}
