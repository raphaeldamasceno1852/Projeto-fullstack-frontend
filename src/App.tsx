import { UserProvider } from './contexts/UserContext'
import RoutesMain from './routes/routes'

function App() {

  return (
    <div>      
      <UserProvider>
        <RoutesMain/>
      </UserProvider>
    </div>
  )
}

export default App
