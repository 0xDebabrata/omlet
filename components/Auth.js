import React from "react"
import { Pressable, StyleSheet, Text, View } from "react-native"
import { AntDesign } from "@expo/vector-icons"

import { googleSignIn } from "../functions/auth"

export default function Auth() {

    return (
        <View>
            <View style={[styles.verticallySpaced, styles.mt20]}>
                <View style={styles.logoContainer}>
                    <Text
                        style={styles.logo}
                    >
                        Omlet.
                    </Text>
                </View>

                <Pressable
                    style={styles.button}
                    onPress={googleSignIn}
                >
                    <AntDesign
                        name="google"
                        size={15}
                        color="#DB8B01"
                        style={styles.icon}
                    />
                    <Text
                        style={styles.text}
                    >Sign in with Google</Text>
                </Pressable>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        padding: 5,
        backgroundColor: "#FFDFA8",
        borderRadius: 5,
        width: 220,
        height: 35,
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row"
    },
    text: {
        fontFamily: "Inter_400Regular",
        color: "#CB8816"
    },
    icon: {
        marginRight: 10,
        paddingTop: 2,
        lineHeight: 0,
    },
    container: {
        marginTop: 40,
        padding: 12,
    },
    logoContainer: {
        position: "absolute",
        top: -100, 
    },
    verticallySpaced: {
        paddingTop: 4,
        paddingBottom: 4,
        alignSelf: 'stretch',
    },
    mt20: {
        marginTop: 20,
    },
    logo: {
        fontSize: 56,
        fontFamily: "Inter_700Bold",
        color: "#FFC45D"
    }
})

