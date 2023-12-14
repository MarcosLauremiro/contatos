import { ToastContainer } from "react-toastify";
import { AuthProvider } from "./provider/AuthProvider";
import { ContactProvider } from "./provider/ContactProvider";
import { GlobalProvider } from "./provider/GlobalContext";
import RoutesMain from "./routes/routesMain";
import { GlobalStyled } from "./styles/Globaltyle";
import { UserProvider } from "./provider/UserProvider";

function App() {
  return (
    <>
      <GlobalProvider>
        <UserProvider>
          <GlobalStyled />
          <AuthProvider>
            <ContactProvider>
              <RoutesMain />
              <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
              />
            </ContactProvider>
          </AuthProvider>
        </UserProvider>
      </GlobalProvider>
    </>
  );
}

export default App;
