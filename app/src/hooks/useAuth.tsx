import { AuthContext } from "../provider/AuthProvider"
import {useContext} from "react"


export const useAuth=() => {
    const authContext = useContext(AuthContext)

    return authContext
}

export const newUser=() => {
    const authContext = useContext(AuthContext)

    return authContext
}