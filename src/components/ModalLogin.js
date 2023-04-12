import { useState } from "react";
import axios from "axios";

const ModalLogin = ({ setloginVisible, setsignupVisible, setPermission }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const login = async (username, password) => {
    try {
      const response = await axios.post(
        "site--backend-marvel--nm6dw4wybf2m.code.run/user/login",
        {
          username,
          password,
        }
      );
      setloginVisible(false);
      setPermission(response.data);
      localStorage.setItem("marvel", JSON.stringify(response.data));
    } catch (error) {
      console.log(error);
      setErrorMessage(error.response.data.message);
      setTimeout(() => setErrorMessage(null), 3000);
    }
  };

  return (
    <div
      className="modal-root"
      onClick={() => {
        setloginVisible(false);
      }}
    >
      <p>LOGIN</p>
      <div
        className="modal"
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <button
          onClick={() => {
            setloginVisible(false);
          }}
        >
          X
        </button>
        <h1>Login</h1>

        <input
          type="text"
          placeholder="username"
          onChange={(event) => {
            setUsername(event.target.value);
          }}
          value={username}
        />
        <input
          type="password"
          placeholder="password"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
          value={password}
        />
        <input type="submit" onClick={() => login(username, password)} />
        {errorMessage ? <p>{errorMessage}</p> : null}
        <p>
          Pas encore de compte?
          <span
            onClick={() => {
              setloginVisible(false);
              setsignupVisible(true);
            }}
          >
            Créez en un !
          </span>
        </p>
      </div>
    </div>
  );
};

export default ModalLogin;
