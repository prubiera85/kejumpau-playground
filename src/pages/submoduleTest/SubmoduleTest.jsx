import { useNavigate } from "react-router-dom";
import "./_submoduleTest.scss";

const SubmoduleTest = () => {
  const navigate = useNavigate();

  return (
    <div className="submodule-page">
      <div className="submodule-page__header">
        <div
          className="submodule-page__back"
          onClick={() => {
            navigate("/");
          }}
        >
          ⬅️ Back
        </div>
        <div className="submodule-page__title">Tests submódulo</div>
      </div>
    </div>
  );
};

export default SubmoduleTest;
