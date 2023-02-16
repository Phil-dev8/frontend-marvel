const CharacterCard = ({ elem }) => {
  // Quand j'ajoute ".standard_medium." comme dans ComicsCard, ça casse des images alors je fais sans..
  let picture = elem.thumbnail.path + "." + elem.thumbnail.extension;
  console.log(picture);
  return (
    <div className="character-card">
      <p className="name">{elem.name}</p>
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

export default CharacterCard;
