import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Contact from "../pages/Contact";

export default function RoutesMain(){
    return (
        <Routes>
            <Route path = '/' element={<Login/>}/>
            <Route path = '/register' element={<Register/>}/>
            <Route path = '/contatos' element={<Contact/>}/>
        </Routes>
    )
}