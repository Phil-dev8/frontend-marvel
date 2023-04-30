import { useState, useMemo } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

export const LOGIN = "login";
export const SIGNUP = "signup";

export const AuthModal = ({
  onChangeTypeModal,
  typeModal,
  onChangePermission,
  onCloseModal,
}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const isLogin = useMemo(() => typeModal === LOGIN, [typeModal]);

  const login = async () => {
    try {
      const response = await axios.post(
        "https://site--backend-marvel--nm6dw4wybf2m.code.run/user/login",
        {
          username,
          password,
        }
      );

      onChangePermission(response.data);
      localStorage.setItem("user", JSON.stringify(response.data));
      onCloseModal();
      console.log(response);
      window.location.reload();
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  const signup = async () => {
    try {
      const response = await axios.post(
        "https://site--backend-marvel--nm6dw4wybf2m.code.run/user/signup",
        {
          username,
          password,
        }
      );
      onChangePermission(response.data);
      console.log(response);
      localStorage.setItem("user", JSON.stringify(response.data));
      onCloseModal();
      window.location.reload();
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    if (typeModal === LOGIN) {
      return login();
    } else {
      return signup();
    }
  };

  return (
    <div className="modal-root" onClick={onCloseModal}>
      <div
        className="modal"
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <button className="close-button-modal" onClick={onCloseModal}>
          X
        </button>
        <h1 className="modal-title">{isLogin ? "Connexion" : "Inscription"}</h1>
        <form className="modal-form">
          <div className="modal-form-input-wrapper">
            <input
              type="text"
              placeholder="Identifiant..."
              onChange={(event) => {
                setUsername(event.target.value);
              }}
              value={username}
            />
            <input
              type="password"
              placeholder="••••••••"
              onChange={(event) => {
                setPassword(event.target.value);
              }}
              value={password}
            />
          </div>
          <div className="modal-form-footer">
            <input
              className="modal-form-submit"
              value={isLogin ? "Se connecter" : "S'inscrire"}
              type="submit"
              onClick={async (event) => onSubmit(event)}
            />
            <Toaster />

            <div className="switch-modal-wrapper">
              <p>
                {isLogin
                  ? "Pas encore de compte ?"
                  : "Vous êtes déja inscrit ?"}
              </p>
              <p
                className="switch-modal-wrapper-link"
                onClick={() => {
                  onChangeTypeModal(isLogin ? SIGNUP : LOGIN);
                }}
              >
                {isLogin ? "Créez en un !" : "Connectez-vous !"}
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
