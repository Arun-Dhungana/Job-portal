import { Col, Container, Row, Form } from "react-bootstrap";
import { FormField } from "../../components/formField";
import { useState } from "react";
import { setInForm } from "../../lib";
import { SubmitBtn } from "../../components";
import React from "react";
import http from "../../http";
import { useNavigate } from "react-router-dom";
export const Password = () => {
  const [form, setForm] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = (ev) => {
    ev.preventDefault();
    setLoading(true);
    http
      .put("/profile/change-password", form)
      .then(() => navigate("/profile/password"))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  };
  return (
    <Container>
      <Row>
        <Col
          xs={12}
          md={6}
          lg={4}
          className="mx-auto mt-3 p-3 border border-dark rounded-2 shadow-lg "
        >
          <Row>
            <Col className="text-center">
              <h3>Edit-Password</h3>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form onSubmit={handleSubmit}>
                <FormField title="old_password" label="Password">
                  <Form.Control
                    id="old_password"
                    type="password"
                    name="old_password"
                    onChange={(ev) => setInForm(ev, form, setForm)}
                    required
                  ></Form.Control>
                </FormField>

                <FormField title="new_password" label="New Password">
                  <Form.Control
                    id="new_password"
                    type="password"
                    name="new_password"
                    onChange={(ev) => setInForm(ev, form, setForm)}
                    required
                  ></Form.Control>
                </FormField>

                <FormField title="confirm_password" label="Confirm Password">
                  <Form.Control
                    id="confirm_password"
                    type="password"
                    name="confirm_password"
                    onChange={(ev) => setInForm(ev, form, setForm)}
                    required
                  ></Form.Control>
                </FormField>

                <SubmitBtn
                  title="Update"
                  variant1="dark"
                  variant2="success"
                  icon="fa-cloud-arrow-up"
                  loading={loading}
                ></SubmitBtn>
              </Form>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
