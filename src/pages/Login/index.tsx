import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { UserContext } from "../../Providers/userContext";
import { IUserLogin } from "../../interfaces/login";
import loginSchema from "../../schemas/LoginSchemas";


const Login = () => {
  const { userLogin } = useContext(UserContext);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserLogin>({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = async (data: IUserLogin) => {
    setLoading(true);
    userLogin(data, setLoading);
  };

  return (
    <div>
      <h2>Client List</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <h3>Login</h3>

        <label htmlFor='email'>E-mail</label>
        <input id='email ' type='email' placeholder='Digite seu e-mail' {...register('email')} />
        {errors.email && <p className='red'> {errors.email.message} </p>}

        <label htmlFor='password'>Senha</label>
        <input id='password' type='password' placeholder='Digite sua senha' {...register('password')} />
        {errors.password && <p className='red'> {errors.password.message} </p>}
  
        <button type="submit" disabled={loading}>
          {loading ? "Aguarde..." : "Login"}
        </button>
        {/* <Button variant="primary" type="submit" disabled={loading}>
          {loading ? "Aguarde..." : "Login"}
        </Button> */}

        <Link to="/register">Ainda não possui uma conta?</Link>

        <Link to="/register" className="btn">
          Cadastrar
        </Link>
      </form>
    </div>
  );
};

export default Login;
