import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { CloseIcon, Container, FormContainer, Header, Overlay } from "./style";
import { ClientContext } from "../../contexts/ClientsContext";
import { IClientRequest } from "../../interfaces/client";
import { clientSchema } from "../../schemas/ClientSchema";

const FormModal = () => {
  const { closeModal, registerClient } = useContext(ClientContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IClientRequest>({
    resolver: yupResolver(clientSchema),
  });

  const onSubmit = (data: IClientRequest) =>{
    console.log(data)
    registerClient(data)
   }

  return (
    <Overlay>
      <Container>
        <Header>
          <h3>Cadastrar Cliente</h3>
          <button onClick={closeModal}>
            <CloseIcon />
          </button>
        </Header>
        <FormContainer onSubmit ={handleSubmit(onSubmit)}>
          <label htmlFor="title">Nome Completo:</label>
          <input
            type="text"
            placeholder="Digite o nome do Cliente"
            {...register("fullname")}
          />
          {errors.fullname && <p className="red"> {errors.fullname.message} </p>}
       
          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            placeholder="Digite o email"
            {...register("email")}
          />
          {errors.email && <p className="red"> {errors.email.message} </p>}
       
          <label htmlFor="title">Telefone:</label>
          <input
            type="text"
            placeholder="Digite o telefone "
            {...register("telefone")}
          />
          {errors.telefone && <p className="red"> {errors.telefone.message} </p>}
          
          <button type="submit">Cadastrar Cliente</button>
      
        </FormContainer>
      </Container>
    </Overlay>
  );
};

export default FormModal;
