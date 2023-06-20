import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LandingPage from "./components/LandingPage";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import MapList from "./components/MapList";
import MapScreen from "./components/mapScreen";
import ChangeUsername from "./components/ChangeUsername";
import MyTabs from "./components/Navigation";
import { UidProvider } from "./components/Contexts";
import ChangeEmail from "./components/ChangeEmail";
import ResetPassword from "./components/ResetPassword";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <UidProvider>
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
                    <Stack.Screen
                        name="Change Username"
                        component={ChangeUsername}
                    />
                    <Stack.Screen
                        name="Change Email"
                        component={ChangeEmail}
                    />
                    <Stack.Screen
                        name="Navigation"
                        options={{ headerShown: false }}
                        component={MyTabs}
                    />
                    <Stack.Screen
                        name="Maps"
                        component={MapList}
                    />
                    <Stack.Screen
                        name="Reset Password"
                        component={ResetPassword}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </UidProvider>
    );
}
