import { ReactNode, createContext, useState } from "react";
import { api } from "../service/api";
import { useNavigate } from "react-router-dom";

export interface ContactProps {
  children: ReactNode;
}

export interface IListContact {
  id: string;
  name: string;
  email: string;
  fone: string;
}

export interface IGlobalContext {
  setListContact: React.Dispatch<React.SetStateAction<IListContact[]>>;
  listContact: IListContact[];
  contacts: () => Promise<void>;
  logout: () => Promise<void>;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  selectContact: IListContact | null
  setSelectContact: React.Dispatch<React.SetStateAction<IListContact | null>>
}

export const GlobalContext = createContext({} as IGlobalContext);

const TOKEN = localStorage.getItem("token");

export const GlobalProvider = ({ children }: ContactProps) => {
  const [listContact, setListContact] = useState<IListContact[]>([]);

  const [selectContact, setSelectContact] = useState<IListContact| null>(null);

  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  const contacts = async () => {
    try {
      const { data } = await api.get("/contacts", {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      });
      setListContact(data);
    } catch (error) {
      console.log(error);
    }
  };

  const logout = async () => {
    localStorage.clear;
    navigate("/");
  };
  return (
    <GlobalContext.Provider
      value={{
        listContact,
        setListContact,
        contacts,
        logout,
        isOpen,
        setIsOpen,
        selectContact,
        setSelectContact
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
