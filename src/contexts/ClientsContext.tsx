import { ReactNode, createContext, useContext, useEffect } from "react";
import { IClientRequest } from "../interfaces/client";
import { api } from "../services/api";
import { UserContext } from "./UserContext";

export const ClientContext = createContext({} as IClientContext);

interface IClientContext {
  registerClient: (data: IClientRequest) => Promise<void>;
}

interface IClientProviderProps {
  children: ReactNode;
}

export const ClientProvider = ({ children }: IClientProviderProps) => {
  const { clients, setClients } = useContext(UserContext);

  const loadUser = async () => {
    const token = localStorage.getItem("@Client_list_token");
    if (token) {
      try {
        api.defaults.headers.common.Authorization = `Bearer ${token}`;
        const { data } = await api.get(`/users/profile`);
        setClients(data.clients);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const registerClient = async (data: IClientRequest) => {
    const token = localStorage.getItem("@Client_list_token");

    try {
      if (
        !clients.find(
          (client) => client.email.toLowerCase() === data.email.toLowerCase()
        )
      ) {
        api.defaults.headers.common.Authorization = `Bearer ${token}`;
        const res = await api.post("/clients", data);
        loadUser();
        // setClients([...clients, res.data.clients])
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ClientContext.Provider
      value={{
        registerClient,
      }}
    >
      {children}
    </ClientContext.Provider>
  );
};
