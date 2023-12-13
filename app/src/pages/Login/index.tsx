import { zodResolver } from "@hookform/resolvers/zod"
import { LoginData, loginSchema } from "./LoginSchema"
import { DivFormStyle } from "./style"
import { useForm } from "react-hook-form"
import { useAuth } from "../../hooks/useAuth"
import Contact from "../Contact"
import { useContext } from "react"
import { GlobalContext, GlobalProvider } from "../../provider/GlobalContext"

const Login = () => {
    const {contacts} = useContext(GlobalContext)

    const { signIn } = useAuth()

    const { register, handleSubmit, formState:{errors} } = useForm<LoginData>(
        {
            resolver: zodResolver(loginSchema)
        })
        // console.log(errors)
    const submit = (data: LoginData) => {
        signIn(data)
        contacts()
    }
    return (
        <>
            <DivFormStyle>
                <form onSubmit={handleSubmit(submit)}>
                    <span>Login</span>
                    <div className="input-container">
                        <label htmlFor="email">E-mail</label>
                        <input type="text" id="email" {...register("email")} required />
                    </div>
                    <div className="input-container">
                        <label htmlFor="password" >Senha</label>
                        <input type="password" id="password" {...register("password")} required />
                    </div>
                    <div className="buttons">
                        <button type="submit" className="login">logar</button>
                        <button onClick={(event) => { event.preventDefault(); window.location.href = 'http://localhost:5173/register' }} className="register">Registrar</button>
                    </div>
                </form>
            </DivFormStyle>
        </>
    )
}

export default Login