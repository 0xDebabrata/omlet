import { Alert } from "react-native"
import { startAsync, makeRedirectUri } from "expo-auth-session"
import { supabase } from "../lib/supabase"

import getEnvVars from "../environment"

const { supabaseUrl } = getEnvVars()

export const signOut = async () => {
    await supabase.auth.signOut()
}

export const googleSignIn = async () => {
    const returnUrl = makeRedirectUri({ useProxy: false })
    const provider = "google"
    const authUrl = `${supabaseUrl}/auth/v1/authorize?provider=${provider}&redirect_to=${returnUrl}`

    console.log("return url: ", returnUrl)

    const response = await startAsync({ authUrl, returnUrl })
    
    if (!response || !response.params?.refresh_token) return;

    const { error } = await supabase.auth.signIn({
        refreshToken: response.params.refresh_token
    })

    if (error) {
        Alert.alert(error.message)
    }
}


