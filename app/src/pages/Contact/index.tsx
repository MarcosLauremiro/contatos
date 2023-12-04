import { GlobalContext } from "../../provider/GlobalProvider"
import { ContactListStyle, DivFormStyle } from "./style"
import { useContext } from "react";

function Contact() {

    const { contactList } = useContext(GlobalContext)

    return (
        <>
            <DivFormStyle>
                <form >
                    <span>Criar contato</span>
                    <div className="input-container">
                        <label htmlFor="name">Nome</label>
                        <input type="text" id="name" required />
                    </div>
                    <div className="input-container">
                        <label htmlFor="email">E-mail</label>
                        <input type="email" id="email" required />
                    </div>
                    <div className="input-container">
                        <label htmlFor="telefone">Telefone</label>
                        <input type="tel" id="telefone" required />
                    </div>
                    <div className="buttons">
                        <button type="submit" className="register">Registrar</button>
                    </div>
                </form>
            </DivFormStyle>
            <ContactListStyle>
                <ul>
                    {contactList.map((contact) => (
                        <li key={contact.id}>
                            <p>{contact.name}</p>
                            <span>{contact.email}</span>
                            <span>{contact.fone}</span>
                        </li>
                    ))}
                </ul>
            </ContactListStyle>
        </>
    )
}
export default Contact