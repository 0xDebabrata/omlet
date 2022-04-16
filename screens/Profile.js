import { Text, StyleSheet, View } from "react-native"
import { StatusBar } from 'expo-status-bar';

export default function ProfileScreen() {
    return (
        <View
            style={styles.container}
        >
            <StatusBar style="auto" />
            <Text
                style={styles.text}
            >
                You are signed in.
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
    },
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
})

