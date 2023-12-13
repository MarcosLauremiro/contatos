import { AuthProvider } from "./provider/AuthProvider";
import { ContactContext, ContactProvider } from "./provider/ContactProvider";
import { GlobalProvider } from "./provider/GlobalContext";
import RoutesMain from "./routes/routesMain";
import { GlobalStyled } from "./styles/Globaltyle";

function App() {
  return (
    <>
      <GlobalProvider>
        <GlobalStyled />
        <AuthProvider>
          <ContactProvider>
            <RoutesMain />
          </ContactProvider>
        </AuthProvider>
      </GlobalProvider>
    </>
  );
}

export default App;
