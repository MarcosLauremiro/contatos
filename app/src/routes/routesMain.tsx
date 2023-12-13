import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Contact from "../pages/Contact";
import { ProtectedRoutes } from "./ProtectedRoutes";

export default function RoutesMain() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route element={<ProtectedRoutes/>}>
        <Route path="/contatos" element={<Contact />} />
      </Route>
    </Routes>
  );
}
