import { useState } from "react";
import { SubmitBtn, FormField } from "../../components/index";
import { setInForm } from "../../lib";
import { Container, Form, Row, Col } from "react-bootstrap";
export const Login = () => {
  const [form, setForm] = useState({});
  const handleSubmit = (ev) => {
    ev.preventDefault();
    console.log("bbkj");
  };
  return (
    <Container>
      <Row>
        <Col
          sm={8}
          lg={4}
          md={6}
          className="border border-success my-3 py-2 mx-auto rounded-2 shadow-lg"
        >
          <Row>
            <Col>
              <h1 className="text-center">Login</h1>
            </Col>
          </Row>
          <Col>
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
              <div>
                <SubmitBtn icon="fa-sign-in alt"></SubmitBtn>
              </div>
            </Form>
          </Col>
        </Col>
      </Row>
    </Container>
  );
};
