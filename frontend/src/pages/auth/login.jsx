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
          className=" my-3 py-2 mx-auto rounded-2 shadow-lg"
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

              <SubmitBtn icon="fa-sign-in-alt" title="Login"></SubmitBtn>
            </Form>
          </Col>
          <Row>
            <Col>
              <h6 className="text-center">
                Don't have an account? SignUp<br></br>
                <a href="/register/seeker">as Jobseeker </a>
                <br></br>
                <a href="/register/company">as Company </a>
              </h6>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
