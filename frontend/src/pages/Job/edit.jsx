import { useState } from "react";
import { Container, Col, Row, Form } from "react-bootstrap";
import Switch from "react-switch";
import { FormField, SubmitBtn } from "../../components/index";
import { setInForm } from "../../lib";
export const Edit = () => {
  const [form, setForm] = useState({});
  const [check, setCheck] = useState(false);
  const handleSubmit = (ev) => {
    ev.preventDefault();
    console.log(1);
  };
  return (
    <Container>
      <Row>
        <Col
          lg={6}
          md={8}
          xs={12}
          className=" mx-auto mt-3 mb-3 rounded-3  "
          style={{ boxShadow: "2px 2px 10px blue" }}
        >
          <Row>
            <Col>
              <h1 className="text-center ">Edit Job</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form onSubmit={handleSubmit}>
                <FormField label="Title" title="title">
                  <Form.Control
                    id="title"
                    name="title"
                    type="text"
                    onChange={(ev) => setInForm(ev, form, setForm)}
                    required
                  ></Form.Control>
                </FormField>
                <FormField title="post" label="No. of Openings">
                  <Form.Control
                    id="post"
                    name="count"
                    type="number"
                    onChange={(ev) => setInForm(ev, form, setForm)}
                    required
                  ></Form.Control>
                </FormField>
                <FormField title="timing" label="Timing">
                  <Form.Select
                    id="timing"
                    name="timing"
                    type="number"
                    onChange={(ev) => setInForm(ev, form, setForm)}
                    required
                  >
                    <option>Choose one....</option>
                    <option>FullTime</option>
                    <option>PartTime</option>
                  </Form.Select>
                </FormField>
                <FormField title="category" label="Category">
                  <Form.Select
                    id="category"
                    name="category"
                    type="text"
                    onChange={(ev) => setInForm(ev, form, setForm)}
                    required
                  >
                    <option>Choose one....</option>
                    <option>Bank</option>
                    <option>finance</option>
                    <option>Health</option>
                  </Form.Select>
                </FormField>
                <FormField title="position" label="Position level">
                  <Form.Select
                    id="position"
                    name="position"
                    type="number"
                    onChange={(ev) => setInForm(ev, form, setForm)}
                    required
                  >
                    <option>Choose one....</option>
                    <option>Junior-level</option>
                    <option>Mid-level</option>
                    <option>Senior-level</option>
                  </Form.Select>
                </FormField>
                <FormField
                  label="Description/Skills required"
                  title="description"
                >
                  <Form.Control
                    id="description"
                    name="description"
                    type="text"
                    as="textarea"
                    onChange={(ev) => setInForm(ev, form, setForm)}
                    required
                  ></Form.Control>
                </FormField>
                <FormField title="experience" label="Experience">
                  <Form.Control
                    id="experience"
                    name="experience"
                    type="text"
                    onChange={(ev) => setInForm(ev, form, setForm)}
                    required
                  ></Form.Control>
                </FormField>
                <FormField title="education" label="Education">
                  <Form.Control
                    id="education"
                    name="education"
                    type="text"
                    onChange={(ev) => setInForm(ev, form, setForm)}
                    required
                  ></Form.Control>
                </FormField>
                <FormField title="salary" label="Salary">
                  <Form.Control
                    id="salary"
                    name="salary"
                    type="number"
                    onChange={(ev) => setInForm(ev, form, setForm)}
                    required
                  ></Form.Control>
                </FormField>
                <FormField title="location" label="Location">
                  <Form.Control
                    id="location"
                    name="location"
                    type="text"
                    onChange={(ev) => setInForm(ev, form, setForm)}
                    required
                  ></Form.Control>
                </FormField>
                <FormField title="deadline" label="Deadline">
                  <Form.Control
                    style={{ border: "0" }}
                    id="deadline"
                    name="deadline"
                    type="date"
                  ></Form.Control>
                </FormField>
                <FormField title="status" label="Status">
                  <br></br>
                  <Switch
                    checked={check}
                    onChange={() => setCheck(!check)}
                  ></Switch>
                </FormField>
                <SubmitBtn
                  variant1="secondary"
                  variant2="info"
                  icon="fa-edit"
                  title="Edit"
                ></SubmitBtn>
              </Form>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
