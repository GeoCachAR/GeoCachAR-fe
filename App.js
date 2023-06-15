import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LandingPage from "./components/LandingPage";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import MapList from "./components/MapList";
import MapScreen from "./components/mapScreen";
import ChangeUsername from "./components/ChangeUsername";
import { useEffect, useState } from "react";
import MyTabs from "./components/Navigation";
import ChangePassword from "./components/changePassword";

const Stack = createNativeStackNavigator();

export default function App() {
    const [username, setUsername] = useState("Captain Hook");
    const [password, setPassword] = useState("NotAPassowrd");

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="GeoCachAR"
                    component={LandingPage}
                />
                <Stack.Screen
                    name="Log In"
                    component={LogIn}
                />
                <Stack.Screen
                    name="Sign Up"
                    component={SignUp}
                />
                <Stack.Screen
                    name="Home"
                    component={Home}
                />
                <Stack.Screen
                    name="Map Screen"
                    component={MapScreen}
                />
                <Stack.Screen name="Change Username">
                    {() => (
                        <ChangeUsername
                            username={username}
                            setUsername={setUsername}
                        />
                    )}
                </Stack.Screen>
                <Stack.Screen name="Change Password">
                    {() => (
                        <ChangePassword
                            password={password}
                            setPassword={setPassword}
                        />
                    )}
                </Stack.Screen>
                <Stack.Screen
                    name="Navigation"
                    options={{ headerShown: false }}
                >
                    {() => (
                        <MyTabs
                            username={username}
                            setUsername={setUsername}
                            password={password}
                            setPassword={setPassword}
                        />
                    )}
                </Stack.Screen>
                <Stack.Screen
                    name="Maps"
                    component={MapList}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
