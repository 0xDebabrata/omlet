import 'react-native-url-polyfill/auto';
import { useEffect, useState } from "react"
import { Alert, StyleSheet, Pressable, Image, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Entypo, Ionicons } from "@expo/vector-icons"
import AppLoading from "expo-app-loading"

import { 
    useFonts,
    Inter_400Regular,
    Inter_700Bold,
} from '@expo-google-fonts/inter'


import { supabase } from "./lib/supabase";
import useUser from "./lib/user"
import Loader from "./components/Loader"
import Auth from "./components/Auth"
import AccountDetails from "./screens/AccountDetails"
import HomeScreen from "./screens/Home"
import Profile from "./screens/Profile"

export default function App() {
    const { user } = useUser()
    const [loading, setLoading] = useState(true)
    const [accountExists, setAccountExists] = useState(false)
    const [update, setUpdate] = useState(false)

    const Stack = createNativeStackNavigator()
    const Tab = createBottomTabNavigator()

    const getAccounts = async () => {
        const { data, error } = await supabase
            .from("bank_accounts")
            .select("account_id")

        console.log("account data: ", data)
        if (!error) {
            setAccountExists(data.length > 0 ? true : false)
            setLoading(false)
        } else {
            Alert.alert(
                "Error",
                error.message,
                [{
                    text: "Cancel",
                }],
                {
                    cancelable: true
                }
            )
        }
    }

    useEffect(() => {
        if (!user) return;
        getAccounts()
    }, [user, update])

    let [fontsLoaded] = useFonts({
        Inter_400Regular,
        Inter_700Bold,
    })

    if (!fontsLoaded) {
        return <AppLoading />
    }

    if (!user) {
        return (
            <View style={styles.container}>
                <Auth />
            </View>
        )
    }

    if (loading) {
        return <Loader />
    }

    return (
        <NavigationContainer>
            {!accountExists && (
                <Stack.Navigator>
                    <Stack.Screen
                        name="Onboarding"
                        options={{
                            title: "Onboarding",
                            headerTintColor: "#FFC45D",
                            headerTitleAlign: "center",
                            headerTitleStyle: {
                                fontFamily: "Inter_700Bold",
                                textAlign: "center",
                            }
                        }}
                    >
                        {props => <AccountDetails {...props} setUpdate={setUpdate} />}
                    </Stack.Screen>
                </Stack.Navigator>
            )}

            {accountExists && (
                <Tab.Navigator
                    screenOptions={({ route }) => ({
                        tabBarIcon: ({ focused, color, size }) => {
                            if (route.name === "Home") {
                                return (
                                    <Entypo name="list" size={size+5} color={color} />
                                )
                            } else if (route.name === "Profile") {
                                return (
                                    <Ionicons name="person" size={size+5} color={color} />
                                )
                            }
                        },
                        tabBarShowLabel: false,
                        tabBarActiveTintColor: "#CB8816",
                        tabBarInactiveTintColor: "#FFDFA8",
                        tabBarStyle: {
                            height: 60,
                            paddingTop: 10,
                            paddingBottom: 10,
                        },
                        tabBarLabelStyle: {
                            fontFamily: "Inter_400Regular"
                        }
                    })}
                >
                    <Tab.Screen 
                        name="Home" 
                        component={HomeScreen} 
                        options={{
                            title: "Omlet.",
                            headerTintColor: "#FFC45D",
                            headerTitleAlign: "center",
                            headerTitleStyle: {
                                fontFamily: "Inter_700Bold",
                                textAlign: "center",
                            }
                        }}
                    />
                    <Tab.Screen
                        name="Profile"
                        component={Profile}
                        options={{
                            title: "Profile",
                            headerTintColor: "#FFC45D",
                            headerTitleStyle: {
                                fontFamily: "Inter_700Bold",
                            }
                        }}
                    />
                </Tab.Navigator>
            )}

        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    button: {
        padding: 5,
        backgroundColor: "#eaeaea",
        borderRadius: 5,
        width: 220,
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row"
    },
    text: {
        textAlign: "center",
    },
    icon: {
        width: 15,
        height: 15,
        marginRight: 10,
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

