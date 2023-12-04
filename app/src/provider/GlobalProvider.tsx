import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../service/api";

interface IContacts {
    id: string
    name: string
    email: string
    fone: string
    register_at: string
    userId: string
}

interface GlobalContextProps {
    contactList: IContacts[];
    setContactList: React.Dispatch<React.SetStateAction<IContacts[]>>;
    renderContact: () => Promise<void>;
}

interface GlobalProviderProps {
    children: React.ReactNode;
}


export const GlobalContext = createContext({} as GlobalContextProps)

export const GlobalProvider = ({ children }: GlobalProviderProps) => {

    const navigate = useNavigate()
    const [contactList, setContactList] = useState<IContacts[]>([])

    const renderContact = async () => {
        try {
            const { data } = await api.get<IContacts[]>('/constacts')
            setContactList(data)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <GlobalContext.Provider value={{ contactList, setContactList, renderContact }}>
            {children}
        </GlobalContext.Provider>
    )
}