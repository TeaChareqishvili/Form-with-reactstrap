import {
  Form,
  Input,
  FormGroup,
  Label,
  Button,
  FormFeedback,
} from "reactstrap";

import { useState } from "react";

function FormPage() {
  const preventDefault = (e) => {
    e.preventDefault();
   
  };

  const [value, setValue] = useState({
    name: "",
    lastname: "",
    password: "",
  });

  const valueChange = (event) => {
    const { name, value } = event.target;
    setValue((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  const isNameValid = value.name.length > 0;
  const isLastNameValid = value.lastname.length > 0;
  const isPasswordValid = value.password.length > 0;

  return (
    <>
      <div>
        <h3>Fill The Form</h3>
      </div>
      <Form onSubmit={preventDefault}>
        <FormGroup>
          <Label for="exampleText" className="label">
            Enter your name:
          </Label>

          <Input
            className={value.name.length > 0 ? "is-valid" : "is-invalid"}
            style={{
              padding: "10px 20px",
              borderRadius: "8px",
              color: "#f55951",
            }}
            id="exampleText"
            name="name"
            type="text"
            value={value.name}
            onChange={valueChange}
            isValid={isNameValid}
            isInvalid={!isNameValid}
          />
          {!isNameValid && <FormFeedback>Please enter your name</FormFeedback>}
        </FormGroup>
        <FormGroup>
          <Label for="exampleLastName" className="label">
            Enter your last name:
          </Label>
          <Input
            className={value.lastname.length > 0 ? "is-valid" : "is-invalid"}
            style={{
              padding: "10px 20px",
              borderRadius: "8px",
              color: "#f55951",
            }}
            id="exampleLatsName"
            name="lastname"
            type="text"
            value={value.lastname}
            onChange={valueChange}
            isValid={isLastNameValid}
            isInvalid={!isLastNameValid}
          />
          {!isLastNameValid && (
            <FormFeedback>Please enter your last name</FormFeedback>
          )}
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword" className="label">
            Enter your password:
          </Label>
          <Input
            className={value.password.length > 0 ? "is-valid" : "is-invalid"}
            style={{
              padding: "10px 20px",
              borderRadius: "8px",
              color: "#f55951",
            }}
            id="examplePassword"
            name="password"
            type="password"
            value={value.password}
            onChange={valueChange}
            isValid={isPasswordValid}
            isInvalid={!isPasswordValid}
          />
          {!isPasswordValid && (
            <FormFeedback>Please enter your password</FormFeedback>
          )}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "cenetr",
              marginTop: "20px",
            }}
          >
            <Button
              style={{
                outline: "none",
                backgroundColor: "#f55951",
                color: "#f1e8e6",
              }}
            >
              SUBMIT
            </Button>
          </div>
        </FormGroup>
      </Form>
    </>
  );
}

export { FormPage };
