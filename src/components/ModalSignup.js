import { useState } from "react";
import axios from "axios";

const ModalSignup = ({ setsignupVisible, setloginVisible }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [data, setData] = useState(null);

  const signup = async (username, password) => {
    try {
      const response = await axios.post("/user/signup", {
        username,
        password,
      });
      setData(response.data.message);
      setTimeout(() => {
        setData(null);
        setsignupVisible(false);
        setloginVisible(true);
      }, 3000);
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
        setsignupVisible(false);
      }}
    >
      <p>Inscription</p>
      <div
        className="modal"
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <button
          onClick={() => {
            setsignupVisible(false);
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
        <input type="submit" onClick={() => signup(username, password)} />
        {data ? <p>{data}</p> : null}
        {errorMessage ? <p>{errorMessage}</p> : null}
        <p>
          Vous êtes déja inscrit?
          <span
            onClick={() => {
              setloginVisible(true);
              setsignupVisible(false);
            }}
          >
            Connectez-vous !
          </span>
        </p>
      </div>
    </div>
  );
};

export default ModalSignup;
