const ComicsCard = ({ elem }) => {
  let picture =
    elem.thumbnail.path + "/standard_medium." + elem.thumbnail.extension;

  return (
    <div className="comics-card">
      <p className="name">{elem.title}</p>

      <a className="test">
        <img className="picture" src={picture} alt="" />
        {elem.description ? (
          <span>{elem.description}</span>
        ) : (
          <span>Pas de description disponible</span>
        )}
      </a>
    </div>
  );
};

export default ComicsCard;
