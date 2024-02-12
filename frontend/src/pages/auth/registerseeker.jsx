import { useState } from "react";
import React from "react";
import { SubmitBtn, FormField } from "../../components/index";
import { setInForm } from "../../lib";
import { Container, Form, Row, Col, InputGroup } from "react-bootstrap";
import http from "../../http";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
export const Register = () => {
  const [form, setForm] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = (ev) => {
    ev.preventDefault();
    setLoading(true);
    const fd = new FormData();
    for (let i in form) {
      fd.append(i, form[i]);
    }
    fd.append("role", "jobseeker");
    http
      .post("/auth/register", fd, {
        headers: { "Content-type": "multipart/form-data" },
      })
      .then(navigate("/login"))
      .catch((err) => toast.error(err))
      .finally(setLoading(false));
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
              <h1 className="text-center ">JObseeker registration</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form onSubmit={handleSubmit}>
                <FormField label="Name" title="name">
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
                <FormField label="Skill" title="skill">
                  <Form.Control
                    id="skill"
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
                <FormField label="Profile Image" title="image">
                  <Form.Control
                    id="image"
                    name="image"
                    type="file"
                    onChange={(ev) =>
                      setForm({ ...form, image: ev.target.files[0] })
                    }
                    accept="image/*"
                    required
                  ></Form.Control>
                </FormField>
                <FormField title="role" label="Role">
                  <Form.Control
                    id="role"
                    name="role"
                    value="Job-Seeker"
                    disabled
                  ></Form.Control>
                </FormField>

                <SubmitBtn
                  icon="fa-save"
                  title="Sign Up"
                  loading={loading}
                  variant1="danger"
                  variant2="success"
                ></SubmitBtn>
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
