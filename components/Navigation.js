import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import MapList from './MapList';
import UserProfile from './UserProfile';
import { Feather } from '@expo/vector-icons';
import { Button } from 'react-native';

const Tab = createBottomTabNavigator();

export default function MyTabs({
  username,
  setUsername,
  password,
  setPassword,
}) {
  return (
    <Tab.Navigator
      accessibilityRole="menu"
      menubar={Tab.Navigator}
      screenOptions={(route) => ({
        tabBarLabelStyle: { fontSize: 16 },
      })}
    >
      <Tab.Screen
        accessibilityRole="menuitem"
        accessibilityLabel="Home"
        accessibilityHint="Will navigate you to the home screen."
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Feather name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        accessibilityRole="menuitem"
        accessibilityLabel="maps"
        accessibilityHint="Will navigate you to the maps screen."
        name="Maps"
        component={MapList}
        options={{
          tabBarLabel: 'Maps',
          tabBarIcon: ({ color, size }) => (
            <Feather name="map" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        accessibilityRole="menuitem"
        accessibilityLabel="profile"
        accessibilityHint="Will navigate you to your profile"
        name="Profile"
        options={{
          tabBarLabel: 'Profile',
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
