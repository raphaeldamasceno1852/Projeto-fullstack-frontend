import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { ClientProvider } from './contexts/ClientsContext';
import { UserProvider } from './contexts/UserContext';
import RoutesMain from './routes/routes';
import Global from './styles/Global';


function App() {
  return (
    <div>
      <Global/>
      <UserProvider>
        <ClientProvider>
          <RoutesMain/>
        </ClientProvider>
      </UserProvider>
      <ToastContainer />
    </div>
  )
}

export default App
