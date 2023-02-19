import picture from "../assets/img/home-pic.png";

const Home = () => {
  return (
    <div className="main">
      <img src={picture} alt="main-pic" />;
      <p className="welcome">
        Bienvenue sur le site référence de l'univers Marvel !
      </p>
    </div>
  );
};

export default Home;
