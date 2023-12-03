import { ReactNode, createContext } from "react";
import { LoginData } from "../pages/Login/LoginSchema";
import { api } from "../service/api";
import { useNavigate } from "react-router-dom";

export interface AuthProps {
    children: ReactNode
}

export interface AuthContext {
    signIn: (data: LoginData) => void
}

export const AuthContext = createContext<AuthContext>({} as AuthContext)

export const AuthProvider = ({ children }: AuthProps) => {

    const navigate = useNavigate()

    const signIn = async (data: LoginData) => {
        try {

            const response = await api.post("/login", data)
            const { token } = response.data

            api.defaults.headers.common.Authorization = `Bearer ${token}`
            localStorage.setItem("token", token)
            navigate("contatos")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <AuthContext.Provider value={{ signIn }}>
            {children}
        </AuthContext.Provider>
    )
}