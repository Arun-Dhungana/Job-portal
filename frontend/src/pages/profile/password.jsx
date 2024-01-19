import { Col, Container, Row, Form } from "react-bootstrap";
import { FormField } from "../../components/formField";
import { useState } from "react";
import { setInForm } from "../../lib";
import { SubmitBtn } from "../../components";
export const Password = () => {
  const [form, setForm] = useState({});
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
              <Form>
                <FormField title="old_password" label="Password">
                  <Form.Control
                    id="old_password"
                    type="password"
                    name="password"
                    onChange={(ev) => setInForm(ev, form, setForm)}
                  ></Form.Control>
                </FormField>

                <FormField title="new_password" label="New Password">
                  <Form.Control
                    id="new_password"
                    type="password"
                    name="new_password"
                    onChange={(ev) => setInForm(ev, form, setForm)}
                  ></Form.Control>
                </FormField>

                <FormField title="confirm_password" label="Confirm Password">
                  <Form.Control
                    id="confirm_password"
                    type="password"
                    name="confirm_password"
                    onChange={(ev) => setInForm(ev, form, setForm)}
                  ></Form.Control>
                </FormField>
                <Row>
                  <Col className="text-center">
                    <SubmitBtn
                      className=""
                      title="Update"
                      icon="fa-cloud-arrow-up"
                    ></SubmitBtn>
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
