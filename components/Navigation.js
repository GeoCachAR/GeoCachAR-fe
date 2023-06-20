import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./Home";
import MapList from "./MapList";
import UserProfile from "./UserProfile";
import { Feather } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function MyTabs({
  username,
  setUsername,
  password,
  setPassword,
}) {
  return (
    <Tab.Navigator
      screenOptions={(route) => ({
        tabBarLabelStyle: { fontSize: 16 },
      })}
    >
      <Tab.Screen
        accessibilityLabel="Press to be brough back to home"
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <Feather name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        accessibilityLabel="Press to view maps"
        name="Maps"
        component={MapList}
        options={{
          tabBarLabel: "Maps",
          tabBarIcon: ({ color, size }) => (
            <Feather name="map" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        accessibilityLabel="Press to view your  profile"
        name="Profile"
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <Feather name="user" color={color} size={size} />
          ),
        }}
      >
        {() => <UserProfile username={username} password={password} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
}
