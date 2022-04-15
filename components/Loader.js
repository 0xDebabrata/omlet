import { ActivityIndicator, StyleSheet, View } from "react-native"

export default function Loader() {
    return (
        <View style={styles.container}>
            <ActivityIndicator
                size="large"
                color="#CB8816"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
})

