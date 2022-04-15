import { useEffect, useState } from "react"
import { supabase } from "./supabase"

export default function useUser() {
    const [user, setUser] = useState(null)
    const [session, setSession] = useState(null)

    supabase.auth.onAuthStateChange((event, session) => {
        setSession(session)
    })

    useEffect(() => {
        setUser(supabase.auth.user())
    }, [session])

    return { user }
}

