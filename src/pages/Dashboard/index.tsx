import { useContext } from "react";
import { Navigate } from "react-router-dom";
import ClientContainer from "../../components/ClientsContainer";
import { UserContext } from "../../contexts/UserContext";
import { Header, Main, UserData } from "./style";

const Dashboard = () => {
  const { userLogout, user, loading } = useContext(UserContext);

  return (
    <>
      {user ? (
        <div>
          <Header>
            <h2>Client List</h2>
            <button onClick={userLogout}>Sair</button>
          </Header>
          <UserData>
            <h1>
              Olá {user.firstName} {user.lastName}
            </h1>
            <p> {user.email}</p>
          </UserData>
          <Main>
            <ClientContainer />
          </Main>
        </div>
      ) : (
        <Navigate to="/" replace={true} />
      )}
    </>
  );
};

export default Dashboard;
