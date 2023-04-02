import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import {FaTrashAlt} from 'react-icons/fa'

const ListClients = () => {
  const { clients } = useContext(UserContext);
  
  
  return (
    <ul>
      {clients.length > 0 ? (
        clients.map((c) => (
          <li key={c.id}>
            <h3>{c.fullname}</h3>
            <div>
              <p>{c.email}</p>
              <p>{c.telefone}</p>
              {/* <button onClick={() => deleteTech(c.id)}><FaTrashAlt/></button> */}
            </div>
          </li>
        ))
      ) : (
        <h3> Nenhum cliente cadastrado </h3>
      )}
    </ul>
  );
};

export default ListClients;
