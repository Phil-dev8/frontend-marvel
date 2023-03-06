const CharacterCard = ({ elem }) => {
  // Quand j'ajoute ".standard_medium." comme dans ComicsCard, ça casse certaines images alors je fais sans..
  let picture = elem.thumbnail.path + "." + elem.thumbnail.extension;

  return (
    // <Link to="/comics/characterId" state={{ id: elem._id }}>

    <div className="character-card">
      <p className="name">{elem.name}</p>
      <div className="test">
        <img className="picture" src={picture} alt="" />
        {elem.description ? (
          <span>{elem.description}</span>
        ) : (
          <span>Pas de description disponible.</span>
        )}
      </div>
    </div>

    // </Link>
  );
};

export default CharacterCard;
