import { UserProvider } from './Providers/userContext'

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
