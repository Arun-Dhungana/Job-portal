import { useState } from "react";
import { SubmitBtn, FormField } from "../../components/index";
import { setInForm } from "../../lib";
import { Container, Form, Row, Col, InputGroup } from "react-bootstrap";
export const Registercomp = () => {
  const [form, setForm] = useState({});
  const handleSubmit = (ev) => {
    ev.preventDefault();
    console.log(1);
  };
  return (
    <Container>
      <Row>
        <Col
          md={6}
          sm={8}
          className="border border-dark mx-auto mt-3 mb-3 rounded-3  "
          style={{ boxShadow: "2px 2px 10px grey" }}
        >
          <Row>
            <Col>
              <h1 className="text-center ">Register</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form onSubmit={handleSubmit}>
                <FormField label="Company name" title="name">
                  <Form.Control
                    id="name"
                    name="name"
                    type="text"
                    onChange={(ev) => setInForm(ev, form, setForm)}
                    required
                  ></Form.Control>
                </FormField>
                <FormField title="number" label="Number">
                  <Form.Control
                    id="number"
                    name="number"
                    type="number"
                    onChange={(ev) => setInForm(ev, form, setForm)}
                    required
                  ></Form.Control>
                </FormField>
                <FormField label="Description" title="description">
                  <Form.Control
                    id="description"
                    name="description"
                    type="text"
                    as="textarea"
                    onChange={(ev) => setInForm(ev, form, setForm)}
                    required
                  ></Form.Control>
                </FormField>
                <FormField title="email" label="E-mail">
                  <InputGroup>
                    <InputGroup.Text id="email">@</InputGroup.Text>
                    <Form.Control
                      id="email"
                      name="email"
                      type="email"
                      onChange={(ev) => setInForm(ev, form, setForm)}
                      required
                    ></Form.Control>
                  </InputGroup>
                </FormField>
                <FormField title="password" label="Password">
                  <Form.Control
                    id="password"
                    name="password"
                    type="password"
                    onChange={(ev) => setInForm(ev, form, setForm)}
                    required
                  ></Form.Control>
                </FormField>
                <FormField title="confirm_password" label="Confirm password">
                  <Form.Control
                    id="confirm_password"
                    name="confirm_password"
                    type="password"
                    onChange={(ev) => setInForm(ev, form, setForm)}
                    required
                  ></Form.Control>
                </FormField>
                <FormField title="role" label="Role">
                  <Form.Control
                    id="role"
                    name="role"
                    value="Company"
                    disabled
                  ></Form.Control>
                </FormField>

                <SubmitBtn icon="fa-save" title="Sign Up"></SubmitBtn>
              </Form>
            </Col>
            <Row>
              <Col>
                <h6 className="text-center">
                  Already have an account?<a href="/login">Login</a>
                </h6>
              </Col>
            </Row>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
