import { ReactNode, createContext, useContext } from "react";
import { ContactData } from "../pages/Contact/ContactShema";
import { api } from "../service/api";
import { GlobalContext } from "./GlobalContext";

export interface ContactProps {
  children: ReactNode;
}

export interface ContactProvider {
  saveContact: (data: ContactData) => void;
  editeContact: (formData: ContactData, contactId: string) => Promise<void>;
  deleteContact: (contactId: string) => Promise<void>;
}

export const ContactContext = createContext<ContactProvider>(
  {} as ContactProvider
);

export const ContactProvider = ({ children }: ContactProps) => {
  const { setListContact, listContact } = useContext(GlobalContext);

  const TOKEN = localStorage.getItem("token");

  const saveContact = async (formData: ContactData) => {
    try {
      const { data } = await api.post("/contacts", formData, {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      });
      setListContact([...listContact, data]);
    } catch (error) {
      console.log(error);
    }
  };
  const editeContact = async (formData: ContactData, contactId: string) => {
    try {
      const { data } = await api.patch(`/contacts/${contactId}`, formData, {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      });
      setListContact(
        listContact.map((contact) => {
          if (contact.id === contactId) {
            return data;
          } else {
            return contact;
          }
        })
      );
    } catch (error) {
      console.log(error);
    }
  };

  const deleteContact = async (contactId: string) => {
    try {
      const { data } = await api.delete(`/contacts/${contactId}`, {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      });
      setListContact(
        listContact.filter((contact) => {
          return contact.id != contactId;
        })
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ContactContext.Provider
      value={{ saveContact, editeContact, deleteContact }}
    >
      {children}
    </ContactContext.Provider>
  );
};
