import { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import Button from "../../components/Button";
import ClientContainer from "../../components/TechsContainer";
import { UserContext } from "../../context/UserContext";
import { Header, Main, UserData } from "./style";

const Dashboard = () => {
  const { userLogout, user, loadUser, loading } = useContext(UserContext);
 
  return (
    <>
      {user ? (
        <div>
          <Header>
            <h2>Client List</h2>
            <Button variant={"disable"} onClick={userLogout}>
              Sair
            </Button>
          </Header>
          <UserData>
            <h1>Olá {user.firstName} {user.lastName}</h1>
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
