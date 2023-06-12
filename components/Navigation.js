import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import MapList from './MapList';
import UserProfile from './UserProfile';

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Maps" component={MapList} />
      <Tab.Screen name="Profile" component={UserProfile} />
    </Tab.Navigator>
  );
}