import { ReactNode, createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import FormModal from "../components/FormModal";
import { IClientRequest, IClientUpdate } from "../interfaces/client";
import { api } from "../services/api";
import { UserContext } from "./UserContext";

export const ClientContext = createContext({} as IClientContext);

interface IClientContext {
  openFormModal: boolean;
  setOpenFormModal: React.Dispatch<React.SetStateAction<boolean>>;
  openModal: () => void;
  closeModal: () => void;
  registerClient: (data: IClientRequest) => Promise<void>;
  updateClient: (data: IClientUpdate, id: string) => Promise<void>;
  deleteClient: (id: string) => Promise<void>;
}

interface IClientProviderProps {
  children: ReactNode;
}

export const ClientProvider = ({ children }: IClientProviderProps) => {
  const [openFormModal, setOpenFormModal] = useState(false);
  const openModal = (): void => setOpenFormModal(true);
  const closeModal = (): void => setOpenFormModal(false);
  const { clients, setClients } = useContext(UserContext);

  const loadUser = async () => {
    const token = localStorage.getItem("@Client_list_token");

    if (token) {
      try {
        api.defaults.headers.common.Authorization = `Bearer ${token}`;

        const { data } = await api.get(`/users/profile`);
        console.log(data);

        setClients(data.clients);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const registerClient = async (data: IClientRequest) => {

    try {
      if (
        !clients.find(
          (client) => client.email.toLowerCase() === data.email.toLowerCase()
        )
      ) {
        await api.post("/clients", data);
        toast.success("Cliente cadastrado com sucesso!", {
          autoClose: 1500,
        });
        loadUser();
        closeModal();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const updateClient = async (data: IClientUpdate, id: string) => {
    const token = localStorage.getItem("@Client_list_token");
    try {
      api.defaults.headers.common.Authorization = `Bearer ${token}`;
      await api.delete(`/clients/${id}`);
      toast.success("Cliente atualizado com sucesso", {
        autoClose: 1500,
      });
      const updatedClient = clients.map((client) => {
        if (client.id === id) {
          return { ...client, ...data };
        } else {
          return client;
        }
      });

      setClients(updatedClient);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteClient = async (id: string) => {
    try {
      const token = localStorage.getItem("@Client_list_token");
      api.defaults.headers.common.Authorization = `Bearer ${token}`;
      await api.delete(`/clients/${id}`);
      toast.success("Cliente excluido com sucesso", {
        autoClose: 1500,
      });
      const newClientsList = clients.filter((client) => client.id !== id);
      setClients(newClientsList);
    } catch (error) {
      console.log(error);
      toast.error("Algo errado na sua requisição", {
        autoClose: 1500,
      });
    }
  };

  return (
    <ClientContext.Provider
      value={{
        openFormModal,
        setOpenFormModal,
        openModal,
        closeModal,
        registerClient,
        updateClient,
        deleteClient,
      }}
    >
      {children}
      {openFormModal && <FormModal />}
    </ClientContext.Provider>
  );
};
