import { useContext } from "react";
import { StyleProfile } from "./style";
import { UserContext } from "../../../provider/UserProvider";
import { GlobalContext } from "../../../provider/GlobalContext";
import { IoIosLogOut } from "react-icons/io";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ProfileData, ProfileSchema } from "./ProfilelSchema";

export const Profile = () => {
  const { setIsOpenProfile } = useContext(GlobalContext);
  const { deleteProfile, editeProfile, user } = useContext(UserContext);

  console.log(user, 'login');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileData>({
    resolver: zodResolver(ProfileSchema),
  });

  console.log(errors, 'erro form');

  const submit = (data: ProfileData) => {
    editeProfile(data, user?.id!);
  };

  return (
    <>
      <StyleProfile>
        <form onSubmit={handleSubmit(submit)}>
          <div className="header-form">
            <span>Perfil de usuario</span>
            <div className="buttons-header">
              <button
                onClick={(event) => {
                  event.preventDefault();
                  setIsOpenProfile(false);
                }}
                title="sair"
              >
                <IoIosLogOut size="20" />
              </button>
            </div>
          </div>
          <div className="input-container">
            <label htmlFor="name">Nome</label>
            <input
              defaultValue={user?.name}
              type="text"
              id="name"
              required
              {...register("name")}
            />
          </div>
          <div className="input-container">
            <label htmlFor="email">E-mail</label>
            <input
              defaultValue={user?.email}
              type="email"
              id="email"
              required
              {...register("email")}
            />
          </div>
          <div className="input-container">
            <label htmlFor="telefone">Telefone</label>
            <input
              defaultValue={user?.fone}
              type="tel"
              id="telefone"
              required
              {...register("fone")}
            />
          </div>
          <div className="buttons">
            <button type="submit" className="register">
              Editar perfil
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                deleteProfile(user?.id!);
              }}
              className="delete"
            >
              Excluir perfil
            </button>
          </div>
        </form>
      </StyleProfile>
    </>
  );
};
