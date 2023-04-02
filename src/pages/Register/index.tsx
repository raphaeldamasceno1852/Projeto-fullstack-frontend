import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import { IUserRequest } from "../../interfaces/user";
import { registerSchema } from "../../schemas/UserSchemas";

const Register = () => {
  const [loading, setLoading] = useState(false)
  const {userRegister} = useContext(UserContext)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserRequest>({
    resolver: yupResolver(registerSchema),
  });

  const onSubmit = async (data: IUserRequest) => {
    userRegister(data, setLoading)
  }

  return (
     <div>
      <div>
        <h2>Client List</h2>
        <Link to="/" className="backBtn">
          {" "}
          Voltar
        </Link>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <h3>Crie sua conta</h3>

        <span> Rapido e grátis, vamos nessa</span>

        <label htmlFor="firstName">Primeiro nome</label>
        <input
          id="firstName"
          type="name"
          placeholder="Digite seu primeiro nome"
          {...register("firstName")}
        />
        {errors.firstName && <p className="red"> {errors.firstName.message} </p>}
       
        <label htmlFor="lastName">Sobrenome</label>
        <input
          id="lastName "
          type="name"
          placeholder="Digite seu Sobrenome"
          {...register("lastName")}
        />
        {errors.lastName && <p className="red"> {errors.lastName.message} </p>}

        <label htmlFor="email">E-mail</label>
        <input
          id="email "
          type="email"
          placeholder="Digite seu e-mail"
          {...register("email")}
        />
        {errors.email && <p className="red"> {errors.email.message} </p>}

        <label htmlFor="email">Telefone</label>
        <input
          id="phone"
          type="tel"
          placeholder="Digite seu telefone"
          {...register("phone")}
        />
        {errors.email && <p className="red"> {errors.email.message} </p>}

        <label htmlFor="password">Senha</label>
        <input
          id="password"
          type="password"
          placeholder="Crie sua senha"
          {...register("password")}
        />
        {errors.password && <p className="red"> {errors.password.message} </p>}

        <label htmlFor="confirmPassword">Confirmar Senha</label>
        <input
          id="confirmPassword"
          type="password"
          placeholder="Confirme sua senha"
          {...register("confirmPassword")}
        />
        {errors.confirmPassword && (
          <p className="red"> {errors.confirmPassword.message} </p>
        )}

        <button type="submit" disabled={loading}>
            {loading ? "Cadastrando..." : "Cadastrar"}
        </button>
  
      </form>
    </div>
  )
}


export default Register