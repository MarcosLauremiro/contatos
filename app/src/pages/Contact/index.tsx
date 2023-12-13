import { useForm } from "react-hook-form";
import { ContactContext } from "../../provider/ContactProvider";
import { ContactListStyle, DivFormStyle } from "./style";
import { useContext, useState } from "react";
import { ContactData, ContactSchema } from "./ContactShema";
import { zodResolver } from "@hookform/resolvers/zod";
import { GlobalContext } from "../../provider/GlobalContext";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import { Modal } from "./Modal";

function Contact() {
  const { listContact, logout, setIsOpen, isOpen, setSelectContact } = useContext(GlobalContext);
  const { saveContact, deleteContact } = useContext(ContactContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactData>({
    resolver: zodResolver(ContactSchema),
  });
  const submit = (data: ContactData) => {
    saveContact(data);
  };

  return (
    <>
      {isOpen ? <Modal /> : null}
      <DivFormStyle>
        <form onSubmit={handleSubmit(submit)}>
          <div className="header-form">
            <span>Criar contato</span>
            <button
              onClick={(event) => {
                event.preventDefault();
                logout();
              }}
            >
              <IoIosLogOut size="20" />
            </button>
          </div>
          <div className="input-container">
            <label htmlFor="name">Nome</label>
            <input type="text" id="name" required {...register("name")} />
          </div>
          <div className="input-container">
            <label htmlFor="email">E-mail</label>
            <input type="email" id="email" required {...register("email")} />
          </div>
          <div className="input-container">
            <label htmlFor="telefone">Telefone</label>
            <input type="tel" id="telefone" {...register("fone")} required />
          </div>
          <div className="buttons">
            <button type="submit" className="register">
              Salvar contato
            </button>
          </div>
        </form>
      </DivFormStyle>
      {listContact.length >= 1 ? (
        <ContactListStyle>
          <ul>
            {listContact.map((contact) => (
              <li key={contact.id}>
                <div>
                  <p>{contact.name}</p>
                  <span>{contact.email}</span>
                  <span>{contact.fone}</span>
                </div>
                <div className="buttons">
                  <button
                    onClick={() => {
                      deleteContact(contact.id);
                    }}
                  >
                    <FaRegTrashAlt />
                  </button>
                  <button
                    onClick={() => {
                      setSelectContact(contact)
                      setIsOpen(true);
                    }}
                  >
                    <FaEdit />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </ContactListStyle>
      ) : null}
    </>
  );
}
export default Contact;
