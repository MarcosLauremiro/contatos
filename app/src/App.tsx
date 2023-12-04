import { AuthProvider } from "./provider/AuthProvider"
import { GlobalContext, GlobalProvider } from "./provider/GlobalProvider"
import RoutesMain from "./routes/routesMain"
import { GlobalStyled } from "./styles/Globaltyle"

function App() {

  return (
    <>
      <GlobalProvider>
        <GlobalStyled />
        <AuthProvider>
          <RoutesMain />
        </AuthProvider>
      </GlobalProvider>
    </>
  )
}

export default App
