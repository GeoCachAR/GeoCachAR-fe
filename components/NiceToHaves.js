import { ScrollView, Text, Image } from "react-native";
import styles from "../StyleSheet";

const nths = [
  "Regularly updated user pinpoint",
  "Fading out of completed waypoints",
  "Filtering maps",
  "Community experience\n(leaderboards, user profile customisation, competitive maps)",
];

export default function Nicetohaves() {
  return (
    <ScrollView>
      {nths.map((nth) => {
        return <Text style={styles.nths}>{"\u2022 " + nth}</Text>;
      })}
      <Image
        style={styles.nthPirate}
        source={require("../assets/pirate.jpeg")}
      ></Image>
    </ScrollView>
  );
}
