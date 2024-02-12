import { useState } from "react";
import { Container, Col, Row, Form } from "react-bootstrap";
import Switch from "react-switch";
import { FormField, SubmitBtn } from "../../components/index";
import http from "../../http";
import React from "react";
import { useSelector } from "react-redux";
import { setInForm } from "../../lib";
import { useNavigate } from "react-router-dom";
export const Create = () => {
  const user = useSelector((state) => state.user.value);
  const [form, setForm] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = (ev) => {
    ev.preventDefault();
    setLoading(true);
    http
      .post(`/cms/job/${user._id}`, form, { status: true })
      .then(() => navigate(-1))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  };
  return (
    <Container>
      <Row>
        <Col
          lg={6}
          md={8}
          xs={12}
          className="border border-dark mx-auto mt-3 mb-3 rounded-3  "
          style={{ boxShadow: "2px 2px 10px grey" }}
        >
          <Row>
            <Col>
              <h1 className="text-center ">Create a Job</h1>
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
                    <option value="bank-finance">Bank Finance</option>
                    <option value="ngo-ingo">NGO INGO</option>
                    <option value="sales-marketing">Sales Marketing</option>
                    <option value="government">Government</option>
                    <option value="army-police">Army Police</option>
                    <option value="cooperative">Cooperative</option>
                    <option value="school-college">School College</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="hotel-restaurant">Hotel Restaurant</option>
                    <option value="customer_care">Customer Care</option>
                    <option value="it-computer">IT Computer</option>
                    <option value="logistics-supply_chain">
                      Logistics Supply Chain
                    </option>
                  </Form.Select>
                </FormField>
                <FormField title="position" label="Position level">
                  <Form.Select
                    id="position"
                    name="position_level"
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
                    id="deadline"
                    name="deadline"
                    type="date"
                    onChange={(ev) => setInForm(ev, form, setForm)}
                  ></Form.Control>
                </FormField>
                <FormField title="status" label="Status">
                  <br></br>
                  <Switch checked={true} onChange={() => {}} disabled></Switch>
                </FormField>
                <SubmitBtn
                  icon="fa-folder-plus"
                  title="Create"
                  variant1="primary"
                  variant2="success"
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
