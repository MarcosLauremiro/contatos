import { useForm } from "react-hook-form"
import { RegisterData, RegisterSchema } from "./RegisterSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import {DivFormStyle} from "./style"
import { useAuth } from "../../hooks/useAuth"

function Register () {

    const { newUser } = useAuth()

    const { register, handleSubmit, formState:{errors}} = useForm<RegisterData>(
        {
            resolver: zodResolver(RegisterSchema)
    })
    const submit = (data: RegisterData) => {
        newUser(data)
    }
    return (
        <DivFormStyle>
            <form onSubmit={handleSubmit(submit)}>
                <span>Registre-se</span>
                <div className="input-container">
                    <label htmlFor="name">Nome</label>
                    <input type="text" id="name" {...register("name")} required />
                </div>
                <div className="input-container">
                    <label htmlFor="email">E-mail</label>
                    <input type="email" id="email" {...register("email")} required />
                </div>
                <div className="input-container">
                    <label htmlFor="telefone">Telefone</label>
                    <input type="tel" id="telefone" {...register("fone")} required />
                </div>
                <div className="input-container">
                    <label htmlFor="password" >Senha</label>
                    <input type="password" id="password" {...register("password")} required />
                </div>
                <div className="input-container">
                    <label htmlFor="password" >Confirmar Senha</label>
                    <input type="password" id="confirmPassword" {...register("confirmPassword")} required />
                    {errors.confirmPassword?.message}
                </div>
                <div className="buttons">
                    <button onClick={(event) => { event.preventDefault(); window.location.href = 'http://localhost:5173/' }} className="login">logar</button>
                    <button type="submit" className="register">Registrar</button>
                </div>
            </form>
        </DivFormStyle>
    )
}

export default Register