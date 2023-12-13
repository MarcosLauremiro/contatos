import { ReactNode, createContext } from "react";
import { LoginData } from "../pages/Login/LoginSchema";
import { api } from "../service/api";
import { useNavigate } from "react-router-dom";
import { RegisterData } from "../pages/Register/RegisterSchema";

export interface AuthProps {
    children: ReactNode
}

export interface AuthContext {
    signIn: (data: LoginData) => void
    newUser: (data: RegisterData) => void
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

    const newUser = async (formData: RegisterData) => {
        const { confirmPassword, ...newFormdata } = formData

        try {
            const { data } = await api.post('/users', newFormdata)
            localStorage.setItem('token', data.accessToken)
            navigate('/')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <AuthContext.Provider value={{ signIn, newUser }}>
            {children}
        </AuthContext.Provider>
    )
}