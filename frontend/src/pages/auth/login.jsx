import { useState } from "react";
import { SubmitBtn, FormField } from "../../components/index";
import { setInForm } from "../../lib";
import { Form } from "react-bootstrap";
export const Login = () => {
  const [form, setForm] = useState({});
  const handleSubmit = (ev) => {
    ev.preventDefault();
    console.log("bbkj");
  };
  return (
    <div>
      <h1>Login</h1>
      <Form onSubmit={handleSubmit}>
        <FormField title="email" label="Email">
          <br></br>
          <Form.Control
            name="email"
            id="email"
            onChange={(ev) => setInForm(ev, form, setForm)}
          ></Form.Control>
        </FormField>

        <FormField title="password" label="Password">
          <br></br>
          <Form.Control
            name="password"
            id="password"
            onChange={(ev) => setInForm(ev, form, setForm)}
          ></Form.Control>
        </FormField>

        <SubmitBtn></SubmitBtn>
      </Form>
    </div>
  );
};
