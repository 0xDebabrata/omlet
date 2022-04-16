import { Text, StyleSheet, View } from "react-native"
import { StatusBar } from 'expo-status-bar';

export default function Home() {
    const spend = 5000
    const averageSpend = 6900
    const month = "April"

    return (
        <View
            style={styles.container}
        >
            <StatusBar style="auto" />
            <View style={styles.titleContainer}>
                <Text style={styles.header}>
                    Your Transactions
                </Text>
                <Text style={styles.month}>
                    {month}
                </Text>
            </View>

            <View style={styles.wrapper}>
                <View style={styles.box}>
                    <Text style={styles.label}>
                        {`Spent in ${month}`}
                    </Text>
                    <Text style={{
                        ...styles.spend,
                        color: spend > averageSpend ?
                            "red" : "green"
                        }}>
                        {`₹${spend.toLocaleString("en-IN")}`}
                    </Text>
                </View>
                <View style={styles.box}>
                    <Text style={styles.label}>
                        Average monthly spend
                    </Text>
                    <Text style={styles.spend}>
                        {`₹${averageSpend.toLocaleString("en-IN", {
                            maximumFractionDigits: 2,
                            style: 'currency',
                            currency: 'INR'
                        })}`}
                    </Text>
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        paddingBottom: 0,
        justifyContent: "flex-start",
        backgroundColor: "white",
    },
    titleContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
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
    },
    wrapper: {
        marginTop: "auto",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: 80,
        borderTopColor: "#FFDFA8",
        borderTopWidth: 1,
        padding: 0,
    },
    month: {
        fontFamily: "Inter_400Regular",
        color: "#CB8816",
        paddingHorizontal: 10,
        paddingVertical: 2,
        borderRadius: 5,
        backgroundColor: "#FFDFA8",
    },
    box: {
        paddingHorizontal: 10,
        display: "flex",
        flexDirection: "column",
    },
    label: {
        fontFamily: "Inter_400Regular",
        color: "#CB8816",
    },
    spend: {
        fontFamily: "Inter_700Bold",
        color: "#FFC45D",
        fontSize: 28
    }
})

