import "./_home.scss";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <div className="home-page__title">Kejumpau Playground</div>
      <div
        className="home-page__link"
        onClick={() => {
          navigate("/submodule-test");
        }}
      >
        Tests submódulo
      </div>
    </div>
  );
};

export default Home;
