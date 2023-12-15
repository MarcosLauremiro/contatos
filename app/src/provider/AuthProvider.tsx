import { ReactNode, createContext } from "react";
import { LoginData } from "../pages/Login/LoginSchema";
import { api } from "../service/api";
import { useNavigate } from "react-router-dom";
import { RegisterData } from "../pages/Register/RegisterSchema";
import { toast } from "react-toastify";

export interface AuthProps {
  children: ReactNode;
}

export interface AuthContext {
  signIn: (data: LoginData) => void;
  newUser: (data: RegisterData) => void;
}

export const AuthContext = createContext<AuthContext>({} as AuthContext);

export const AuthProvider = ({ children }: AuthProps) => {
  const navigate = useNavigate();

  const signIn = async (data: LoginData) => {
    try {
      const response = await api.post("/login", data);
      const { token } = response.data;

      api.defaults.headers.common.Authorization = `Bearer ${token}`;
      localStorage.setItem("userEmail", data.email);
      localStorage.setItem("token", token);
      toast.success("Login realizado com sucesso", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setTimeout(() => {
        navigate('contatos')
      }, 1000)
    } catch (error) {
      toast.error("Não foi possível realizar o login", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      console.log(error);
    }
  };

  const newUser = async (formData: RegisterData) => {
    const { confirmPassword, ...newFormdata } = formData;

    try {
      const { data } = await api.post("/users", newFormdata);
      localStorage.setItem("token", data.accessToken);
      toast.success("Registro realizado com sucesso", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setTimeout(() => {
        navigate('/')
      }, 1000)
    } catch (error) {
      toast.error("Não foi possível realizar o Registro", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider value={{ signIn, newUser }}>
      {children}
    </AuthContext.Provider>
  );
};
