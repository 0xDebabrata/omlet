import { Text, StyleSheet, View } from "react-native"
import { StatusBar } from 'expo-status-bar';

export default function Home() {
    return (
        <View
            style={styles.container}
        >
            <StatusBar style="auto" />
            <Text style={styles.header}>
                Your Transactions
            </Text>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: "flex-start",
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
    header: {
        fontFamily: "Inter_700Bold",
        fontSize: 24,
        textAlign: "left",
        color: "#FFC45D"
    }

})

