import { ReactNode, createContext, useState } from "react";
import { api } from "../service/api";
import { ProfileData } from "../pages/Contact/Perfil/ProfilelSchema";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export interface UserProps {
  children: ReactNode;
}

export interface UserProvider {
  SeeProfile: (email: string) => void;
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  deleteProfile: (userId: string) => Promise<void>;
  editeProfile: (formData: ProfileData, userId: string) => Promise<void>;
}

export interface User {
  id: string;
  name: string;
  email: string;
  fone: string;
  password: string;
  register_at: Date;
}

export const UserContext = createContext<UserProvider>({} as UserProvider);

export const UserProvider = ({ children }: UserProps) => {
  const TOKEN = localStorage.getItem("token");

  const navigate = useNavigate();

  const [user, setUser] = useState<User | null>(null);

  const SeeProfile = async (email: string) => {
    try {
      const { data } = await api.get<User>(`/users/${email}`, {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      });
      setUser(data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteProfile = async (userId: string) => {
    try {
      const { data } = await api.delete(`/users/${userId}`, {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      });
      toast.success(`Perfil Apagado com sucesso`);
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error("algo errado ao excluir perfil");
    }
  };

  const editeProfile = async (formData: ProfileData, userId: string) => {
    try {
      const { data } = await api.patch(`/users/${userId}`, formData, {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      });
      setUser(data)
      toast.success(`Perfil editado com sucesso`);
    } catch (error) {
      console.log(error);
      toast.error("algo errado ao editar perfil");
    }
  };

  return (
    <UserContext.Provider
      value={{ SeeProfile, user, setUser, deleteProfile, editeProfile }}
    >
      {children}
    </UserContext.Provider>
  );
};
