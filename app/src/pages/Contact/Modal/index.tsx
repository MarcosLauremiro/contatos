import { useForm } from "react-hook-form";
import { ContactData, ContactSchema } from "../ContactShema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { GlobalContext } from "../../../provider/GlobalContext";
import { StyleModal } from "./style";
import { IoIosLogOut } from "react-icons/io";
import { ContactContext } from "../../../provider/ContactProvider";

export const Modal = () => {
  const { setIsOpen,selectContact } = useContext(GlobalContext);
  const { editeContact } = useContext(ContactContext)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactData>({
    resolver: zodResolver(ContactSchema),
  });

  const submit = (formdata:ContactData) => {
    editeContact(formdata, selectContact?.id!)
    setIsOpen(false)
  }
  console.log(selectContact)
  return (
    <StyleModal>
      <div className="modal-container">
        <form onSubmit={handleSubmit(submit)}>
          <div className="header-form">
            <span>Criar contato</span>
            <button
              onClick={(event) => {
                event.preventDefault();
                setIsOpen(false);
              }}
            >
              <IoIosLogOut size="20" />
            </button>
          </div>
          <div className="input-container">
            <label htmlFor="name">Nome</label>
            <input defaultValue={selectContact?.name} type="text" id="name" required {...register("name")} />
          </div>
          <div className="input-container">
            <label htmlFor="email">E-mail</label>
            <input defaultValue={selectContact?.email} type="email" id="email" required {...register("email")} />
          </div>
          <div className="input-container">
            <label htmlFor="telefone">Telefone</label>
            <input defaultValue={selectContact?.fone} type="tel" id="telefone" {...register("fone")} required />
          </div>
          <div className="buttons">
            <button type="submit" className="register">
              Editar contato
            </button>
          </div>
        </form>
      </div>
    </StyleModal>
  );
};
