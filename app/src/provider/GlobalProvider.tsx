import { createContext } from "react";
import { RegisterData } from "../pages/Register/RegisterSchema";
import { api } from "../service/api";
import { useNavigate } from "react-router-dom";


interface GlobalContextProps {

}

interface GlobalProviderProps {
    children: React.ReactNode;
}

export const GlobalContext = createContext({} as GlobalContextProps)

export const GlobalProvider = ({ children }: GlobalProviderProps) => {

    const navigate = useNavigate()

    const newUser = async (formData: RegisterData) => {
        const { confirmPassword, ...newFormdata } = formData



        try {
            const { data } = await api.post('/users', newFormdata)
            localStorage.setItem('user@TOKEN', data.accessToken)
            localStorage.setItem('user@ID', JSON.stringify(data.user.id))
            navigate('contacts')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <GlobalContext.Provider value={{ newUser }}>
            {children}
        </GlobalContext.Provider>
    )
}