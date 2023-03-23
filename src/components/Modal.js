const Modal = ({ setVisible }) => {
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
        <input type="text" placeholder="email" />
        <input type="text" placeholder="password" />
        <input type="submit" />
      </div>
    </div>
  );
};

export default Modal;
