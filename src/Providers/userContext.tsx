import { ReactNode, SetStateAction, createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { IUserLogin } from "../interfaces/login";
import { IUserRequest } from "../interfaces/user";
import { api } from "../services/api";

export const UserContext = createContext({} as IUserContext);

interface IUserContext {
  user: IUserRequest | null;
  setUser: any;
  loading: boolean;
  setLoading: any;
  userRegister: (
    data: IUserRequest,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => void;
  userLogin: (
    data: IUserLogin,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => void;
  userLogout: () => void;
}

interface IUserProviderProps {
  children: ReactNode;
}

export const UserProvider = ({ children }: IUserProviderProps) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  const userRegister = async (
    data: IUserRequest,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    try {
      setLoading(true)
      const res = await api.post("/users", data)
      toast.success("Conta criada com sucesso!", {
        theme: "dark",
        autoClose: 1500,
      }),
      setUser(res.data);
    } catch (error) {
      toast.error("Conta já cadastrada", {
        theme: "dark",
        autoClose: 1500,
      });
    } finally{
      setLoading(false)
    }
  };
    
     

  const userLogin = async (data: IUserLogin) => {};

  const userLogout = (): void => {
    setUser(null);
    navigate("/");
    localStorage.removeItem("@Client_list_token");
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        loading,
        setLoading,
        userRegister,
        userLogin,
        userLogout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
