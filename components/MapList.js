import { Text, Button, ScrollView, View } from 'react-native';
import styles from '../StyleSheet';
import { useNavigation } from '@react-navigation/native';
import { fetchMapList } from '../utils';
import { useContext, useEffect, useState } from 'react';
import { uidContext } from './Contexts';

export default function MapList() {
  const navigation = useNavigation();
  const [mapList, setMapList] = useState({});
  const [locations, setLocations] = useState([]);
  const {user, setUser} = useContext(uidContext)

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

  const handlePress = (mapId) => {
    setUser((current) => {
      if (current.current_maps.hasOwnProperty(mapId)) {
        return current
      } 
      const newCurrentMaps = {...current.current_maps, [mapId]:Object.keys(mapList[mapId].waypoints).reduce((acc, waypoint)=>{
        return {...acc, [waypoint]:false}
      }, {})}

      return {...current, current_maps : newCurrentMaps}
    })
    
    navigation.navigate('Map Screen', {
      mapId, mapName
    });
  }

  return (
    <ScrollView>
      <Text style={styles.availableLocations}>Available Locations</Text>

      {locations.length !== 0
        ? locations.map((location) => {
            return (
              <View key={location.key} style={styles.locationButtons}>
                <Button
                  title={location.location + ' ' + '-' + ' ' + location.name}
                  onPress={() => {
                    handlePress(location.key);
                  }}
                />
              </View>
            );
          })
        : ''}
    </ScrollView>
  );
}
