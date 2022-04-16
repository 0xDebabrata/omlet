import { useState } from "react"
import { Alert, ActivityIndicator, Image, StyleSheet, Pressable, View, Text, TextInput } from "react-native"
import { supabase } from "../lib/supabase"

import card from "../assets/card.png"

export default function AccountDetails({ setUpdate }) {
    const [loading, setLoading] = useState(false)
    const [accountId, setAccountId] = useState("")

    const useTestAccount = () => {
        setAccountId(`${Math.floor(Math.random() * 1000000)}`)
    }

    const addAccount = async () => {
        setLoading(true)
        const { error } = await supabase
            .from("bank_accounts")
            .insert([{
                user_id: supabase.auth.user().id,
                account_id: accountId.trim()
            }], {
                returning: "minimal"
            })

        if (!error) {
            setUpdate(true)
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <Text style={styles.label}>
                    Enter bank account
                </Text>
                <TextInput
                    keyboardType="numeric"
                    editable={false}
                    selectTextOnFocus={false}
                    value={accountId}
                    style={styles.input}
                    placeholder="Account ID"
                />

                {!accountId ? (
                    <Pressable
                        style={styles.button}
                        onPress={useTestAccount}
                    >
                        <Text
                            style={styles.text}
                        >
                            Use test account
                        </Text>
                    </Pressable>
                ) : (
                    <Pressable
                        style={styles.button}
                        onPress={() => {
                            addAccount()
                        }}
                    >
                        {loading ? (
                            <ActivityIndicator
                                size="small"
                                color="#CB8816" />
                        ) : (
                            <Text
                                style={styles.text}
                            >
                                Continue
                            </Text>
                        )}
                    </Pressable>
                )}
            </View>

            <Image
                source={card}
                style={styles.bg}
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
    },
    button: {
        padding: 5,
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
    text: {
        fontFamily: "Inter_400Regular",
        color: "#CB8816"
    },
    input: {
        borderWidth: 1,
        borderColor: "#CB8816",
        borderRadius: 5,
        width: 260,
        height: 35,
        marginVertical: 10,
        paddingVertical: 0,
        paddingHorizontal: 10,
        color: "#CB8816",
        textAlign: "center",
        fontFamily: "Inter_400Regular",
    },
    label: {
        color: "#CB8816",
        fontFamily: "Inter_400Regular",
        fontSize: 16, 
        marginBottom: 10, 
    },
    bg: {
        width: 350,
        height: 250,
        resizeMode: "contain",
        position: "absolute",
        bottom: 100,
        left: -60,
    },
    box: {
        marginBottom: 200,
    }
})


