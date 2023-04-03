import { ReactNode, createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { IClientRequest } from "../interfaces/client";
import { IUserLogin } from "../interfaces/login";
import { IUserRequest } from "../interfaces/user";
import { api } from "../services/api";

export const UserContext = createContext({} as IUserContext);

interface IUserContext {
  user: IUserRequest | null;
  setUser: React.Dispatch<React.SetStateAction<IUserRequest | null>>;
  clients: IClientRequest[];
  setClients: React.Dispatch<React.SetStateAction<IClientRequest[]>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  currentRoute: string | null;
  setCurrentRoute: React.Dispatch<React.SetStateAction<string | null>>;
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

export interface IUserProviderProps {
  children: ReactNode;
}

export const UserProvider = ({ children }: IUserProviderProps) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<IUserRequest | null>(null);
  const [currentRoute, setCurrentRoute] = useState<string | null>(null);
  const [clients, setClients] = useState<IClientRequest[]>(
    [] as IClientRequest[]
  );

  useEffect(() => {
    const loadUser = async () => {
      const token = localStorage.getItem("@Client_list_token");

      if (token) {
        try {
          setLoading(true);
          api.defaults.headers.common.Authorization = `Bearer ${token}`;

          const { data } = await api.get("/users/profile");
          setUser(data);
          setClients(data.clients);
          if (currentRoute) {
            navigate(currentRoute)
          }
        } catch (error) {
          console.log(error);
          localStorage.removeItem("@Client_list_token");
        }
        setLoading(false);
      }
    };
    loadUser();
  }, [loading]);

  const userRegister = async (
    data: IUserRequest,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    try {
      setLoading(true);
      const res = await api.post("/users", data);
      toast.success("Conta criada com sucesso!", {
        autoClose: 1500,
      }),
        navigate("/");
      setUser(res.data);
    } catch (error) {
      toast.error("Conta já cadastrada", {
        autoClose: 1500
      });
    } finally {
      setLoading(false);
    }
  };

  const userLogin = async (data: IUserLogin) => {
    setLoading(true);
    try {
      const res = await api.post("/login", data);
      toast.success("login feito com sucesso!", {
        autoClose: 1500,
      });
      localStorage.setItem("@Client_list_token", res.data.token);
      localStorage.setItem("@Client_list_id", res.data.user.id);
      setUser(res.data.user);
      setClients(res.data.user.clients);
      navigate("/dashboard")
    } catch (error) {
      toast.error("Email ou senha incorretos", {
        autoClose: 1500
      });
    } finally {
      setLoading(false);
    }
  };

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
        clients,
        setClients,
        loading,
        setLoading,
        currentRoute,
        setCurrentRoute,
        userRegister,
        userLogin,
        userLogout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
