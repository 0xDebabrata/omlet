import { Image, Pressable, Text, StyleSheet, View } from "react-native"
import { StatusBar } from 'expo-status-bar';

import { signOut } from "../functions/auth"
import useUser from "../lib/user"

import Loader from "../components/Loader"

export default function ProfileScreen() {
    const { user } = useUser()

    if (!user) {
        return <Loader />
    } else {
        return (
            <View
                style={styles.container}
            >
                <StatusBar style="auto" />

                <Image
                    source={{
                        uri: user.user_metadata.avatar_url
                    }}
                    style={styles.avatar}
                />

                <Text style={styles.name}>
                    {user.user_metadata.full_name}
                </Text>

                <Pressable
                    style={styles.button}
                    onPress={signOut}
                >
                    <Text
                        style={styles.text}
                    >
                        Sign Out
                    </Text>
                </Pressable>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "white",
    },
    button: {
        padding: 5,
        marginVertical: 30,
        backgroundColor: "#FFDFA8",
        borderRadius: 5,
        width: 260,
        height: 35,
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row"
    },
    avatar: {
        width: 120,
        height: 120,
        resizeMode: "contain",
        marginVertical: 30,
        borderRadius: 60,
    },
    text: {
        textAlign: "center",
        color: "#CB8816",
        fontFamily: "Inter_400Regular"
    },
    name: {
        textAlign: "center",
        color: "#FFC45D",
        fontSize: 24,
        fontFamily: "Inter_700Bold"
    }
})

