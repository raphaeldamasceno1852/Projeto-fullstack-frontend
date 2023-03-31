import { UserProvider } from './Providers/userContext'
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
