import { useState, useMemo } from "react";
import axios from "axios";

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
  const [errorMessage, setErrorMessage] = useState(null);
  const [data, setData] = useState("");

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
      onCloseModal();
      onChangePermission(response.data);
      localStorage.setItem("marvel", JSON.stringify(response.data));
    } catch (error) {
      console.log(error);
      setErrorMessage(error.response.data.message);
      setTimeout(() => setErrorMessage(null), 3000);
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
      setData(response.data.message);
      onCloseModal();
    } catch (error) {
      console.log(error);
      setErrorMessage(error.response.data.message);
      setTimeout(() => setErrorMessage(null), 3000);
    }
  };

  const onSubmit = async () => {
    if (typeModal === LOGIN) {
      return login();
    }
    await signup();
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
        <h1 className="modal-title">{isLogin ? "CONNEXION" : "INSCRIPTION"}</h1>
        <form className="modal-form">
          <div className="modal-form-input-wrapper2">
            <p>Identifiant : </p>
            <input
              type="text"
              placeholder="Identifiant..."
              onChange={(event) => {
                setUsername(event.target.value);
              }}
              value={username}
            />
          </div>
          <div className="modal-form-input-wrapper">
            <p>Mot de passe :</p>
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
              value={isLogin ? "Connexion" : "Inscription"}
              type="submit"
              onClick={async () => onSubmit()}
            />
            {errorMessage ? <p>{errorMessage}</p> : null}
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
