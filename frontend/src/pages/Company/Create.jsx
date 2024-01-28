import { Form, Col, Row, Button } from "react-bootstrap";
import { FormField } from "../../components";
import { setInForm } from "../../lib";
import { useState } from "react";
export const Create = () => {
  const [form, setForm] = useState({});
  const [loading, setLoading] = useState(false);
  const handleSubmit = () => {};
  return (
    <Col xs={12}>
      <Row>
        <Col
          xs={7}
          className="mx-auto my-3"
          style={{ boxShadow: "0 0 20px black" }}
        >
          <Row>
            <Col>
              <h2 className="text-center my-2">Contact Person Detail</h2>
            </Col>
          </Row>
          <Form onSubmit={handleSubmit}>
            <FormField label="Contact person" title="title">
              <Form.Control
                id="title"
                name="contact_person"
                type="text"
                onChange={(ev) => setInForm(ev, form, setForm)}
                required
              ></Form.Control>
            </FormField>

            <FormField title="contact_no" label="Contact number">
              <Form.Control
                id="contact_no"
                name="contact_no"
                type="number"
                onChange={(ev) => setInForm(ev, form, setForm)}
                required
              ></Form.Control>
            </FormField>
            <FormField label="Description/Post of person" title="description">
              <Form.Control
                id="description"
                name="description"
                type="text"
                as="textarea"
                onChange={(ev) => setInForm(ev, form, setForm)}
                required
              ></Form.Control>
            </FormField>
            <FormField title="email" label="Email">
              <Form.Control
                id="email"
                name="email"
                type="email"
                onChange={(ev) => setInForm(ev, form, setForm)}
                required
              ></Form.Control>
            </FormField>
            <FormField title="address" label="Address">
              <Form.Control
                id="address"
                name="address"
                type="text"
                onChange={(ev) => setInForm(ev, form, setForm)}
                required
              ></Form.Control>
            </FormField>
            <Row>
              <Col
                xs={12}
                className="d-flex flex-row justify-content-center my-2"
              >
                <Button size="lg" className=" bg-success p-1 px-3">
                  Submit{" "}
                  <i
                    className={`fa-solid  ${
                      loading ? " fa-arrows-spin fa-spin" : "fa-save"
                    }`}
                  ></i>
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Col>
  );
};
