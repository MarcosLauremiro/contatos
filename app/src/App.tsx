import { AuthProvider } from "./provider/AuthProvider"
import { GlobalContext, GlobalProvider } from "./provider/GlobalProvider"
import RoutesMain from "./routes/routesMain"
import { GlobalStyled } from "./styles/Globaltyle"

function App() {

  return (
    <>
      <GlobalStyled/>
      <AuthProvider>
      <GlobalProvider>
        <RoutesMain/>
      </GlobalProvider>
      </AuthProvider>
    </>
  )
}

export default App
