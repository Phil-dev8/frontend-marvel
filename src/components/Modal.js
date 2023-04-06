import { useState } from "react";

const Modal = ({ setVisible }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div
      className="modal-root"
      onClick={() => {
        setVisible(false);
      }}
    >
      <div
        className="modal"
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <button
          onClick={() => {
            setVisible(false);
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
        <input type="submit" />
      </div>
    </div>
  );
};

export default Modal;
