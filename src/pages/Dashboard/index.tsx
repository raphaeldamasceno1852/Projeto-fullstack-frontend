import { useContext } from "react";
import { Navigate } from "react-router-dom";
import ListClients from "../../components/ListClients";
import { UserContext } from "../../contexts/UserContext";

const Dashboard = () => {
  const { userLogout, user } = useContext(UserContext);

// useEffect(()=> {
//   loadUser()
// },[loading])

  return (
    <>
      {user ? (
        <div>
          <div>
            <h2>Client List</h2>
            <button onClick={userLogout}>Sair</button>
          </div>
          <div>
            <h1>
              Olá {user.firstName} {user.lastName}
            </h1>
            <p> {user.email}</p>
          </div>
          <div>
            <ListClients />
          </div>
        </div>
      ) : (
        <Navigate to="/" replace={true} />
      )}
    </>
  );
};

export default Dashboard;
