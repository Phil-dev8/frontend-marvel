import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { AtomSpinner } from "react-epic-spinners";

const CharacterComics = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const { characterId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://site--backend-marvel--nm6dw4wybf2m.code.run/comics/${characterId}?`
        );

        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, [characterId]);

  return loading ? (
    <div className="spinner">
      <AtomSpinner color="rgb(148, 0, 0)" size={500} />
    </div>
  ) : (
    <>
      <div className="character">
        <img
          className="character-pic"
          src={
            data.thumbnail.path +
            "/portrait_incredible." +
            data.thumbnail.extension
          }
          alt="character"
        />

        <div className="character-infos">
          <p className="character-name">{data.name}</p>
          <p className="character-description">{data.description}</p>
        </div>
      </div>
      <p className="sentence">
        Ce personnage est à retrouver dans les comics suivants :
      </p>
      <div className="characterincomics">
        {data.comics.map((picture, id) => {
          return (
            <div key={id}>
              <img
                src={
                  picture.thumbnail.path +
                  "/portrait_uncanny." +
                  picture.thumbnail.extension
                }
                alt="comic"
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CharacterComics;
