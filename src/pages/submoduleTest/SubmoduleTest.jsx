import { useNavigate } from "react-router-dom";
import TestButton from "../../_kejumpauReactUI/components/testButton/TestButton";
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
      <div className="submodule-page__content">
        <TestButton />
      </div>
    </div>
  );
};

export default SubmoduleTest;
