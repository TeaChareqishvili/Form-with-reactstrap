import { FormPage } from "./FormPage";
import "./FormStyle.scss";

function FormWrapper() {
  return (
    <div className="formWrapper">
      <div className="welcomeCard">
        <h1>Welcome</h1>
        <p>To the zone of happiness.</p>
      </div>
      <div className="form">
        <FormPage />
      </div>
    </div>
  );
}

export { FormWrapper };
