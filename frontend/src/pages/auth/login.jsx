import { useState } from "react";
import { SubmitBtn, FormField } from "../../components/index";
import { inStorage, setInForm } from "../../lib/index.js";
import { Container, Form, Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import http from "../../http";
import { setUser } from "../../store/index.js";
import { useNavigate } from "react-router-dom";
export const Login = () => {
  const [form, setForm] = useState({});
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (ev) => {
    ev.preventDefault();
    setLoading(true);

    http
      .post("/auth/login", form)
      .then(({ data }) => {
        dispatch(setUser(data.user));

        inStorage("token", data.token);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(setLoading(false));
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
                  type="text"
                  onChange={(ev) => setInForm(ev, form, setForm)}
                ></Form.Control>
              </FormField>

              <FormField title="password" label="Password">
                <br></br>
                <Form.Control
                  name="password"
                  id="password"
                  type="password"
                  onChange={(ev) => setInForm(ev, form, setForm)}
                ></Form.Control>
              </FormField>

              <SubmitBtn
                icon="fa-sign-in-alt"
                title="Login"
                variant1="primary"
                variant2="success"
                loading={loading}
              ></SubmitBtn>
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
