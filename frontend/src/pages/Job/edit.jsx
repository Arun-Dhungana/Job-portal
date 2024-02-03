import { useEffect, useState } from "react";
import { Container, Col, Row, Form } from "react-bootstrap";
import Switch from "react-switch";
import { FormField, SubmitBtn } from "../../components/index";
import { setInForm } from "../../lib";
import { useNavigate, useParams } from "react-router-dom";
import { Loading } from "../../components/Loading";
import http from "../../http";
import moment from "moment";
export const Edit = () => {
  const [form, setForm] = useState({});
  const [check, setCheck] = useState(true);
  const [loading, setLoading] = useState(false);
  const params = useParams();
  const [job, setJob] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    setLoading(true);
    http
      .get(`cms/job/detail/${params.id}`)
      .then(({ data }) => setJob(data))
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setLoading(false));
  }, []);
  useEffect(() => {
    if (Object.keys(job).length) {
      setForm({
        title: job.title,
        description: job.description,
        timing: job.timing,
        category: job.category,
        position_level: job.position_level,
        experience: job.experience,
        education: job.education,
        salary: job.salary,
        location: job.location,
        deadline: job.deadline,
        count: job.count,
      });
    }
  }, [job]);
  const handleSubmit = (ev) => {
    setLoading(true);
    http
      .put(`cms/job/update/${params.id}`, form, { status: check })
      .then(() => navigate(`/job/edit/${params.id}`))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  };
  return loading ? (
    <Loading></Loading>
  ) : Object.keys(form).length ? (
    <Container>
      {console.log(form)}
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
                    value={form.title}
                    onChange={(ev) => setInForm(ev, form, setForm)}
                    required
                  ></Form.Control>
                </FormField>
                <FormField title="post" label="No. of Openings">
                  <Form.Control
                    id="post"
                    name="count"
                    type="number"
                    defaultValue={form.count}
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
                    defaultValue={form.timing}
                    required
                  >
                    <option>FullTime</option>
                    <option>PartTime</option>
                  </Form.Select>
                </FormField>
                <FormField title="category" label="Category">
                  <Form.Select
                    id="category"
                    name="category"
                    type="text"
                    defaultValue={form.category}
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
                    type="text"
                    defaultValue={form.position_level}
                    onChange={(ev) => setInForm(ev, form, setForm)}
                    required
                  >
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
                    defaultValue={form.description}
                    onChange={(ev) => setInForm(ev, form, setForm)}
                    required
                  ></Form.Control>
                </FormField>
                <FormField title="experience" label="Experience">
                  <Form.Control
                    id="experience"
                    name="experience"
                    type="text"
                    defaultValue={form.experience}
                    onChange={(ev) => setInForm(ev, form, setForm)}
                    required
                  ></Form.Control>
                </FormField>
                <FormField title="education" label="Education">
                  <Form.Control
                    id="education"
                    name="education"
                    type="text"
                    defaultValue={form.education}
                    onChange={(ev) => setInForm(ev, form, setForm)}
                    required
                  ></Form.Control>
                </FormField>
                <FormField title="salary" label="Salary">
                  <Form.Control
                    id="salary"
                    name="salary"
                    type="number"
                    defaultValue={form.salary}
                    onChange={(ev) => setInForm(ev, form, setForm)}
                    required
                  ></Form.Control>
                </FormField>
                <FormField title="location" label="Location">
                  <Form.Control
                    id="location"
                    name="location"
                    type="text"
                    defaultValue={form.location}
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
                    defaultValue={moment(form.deadline).format("YYYY-MM-DD")}
                    required
                  ></Form.Control>
                </FormField>
                <FormField title="status" label="Status">
                  <br></br>

                  <Switch
                    checked={check}
                    onChange={() => {
                      setCheck(!check);
                    }}
                  ></Switch>
                </FormField>
                <SubmitBtn
                  variant1="secondary"
                  variant2="info"
                  icon="fa-edit"
                  title="Edit"
                  loading={loading}
                ></SubmitBtn>
              </Form>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  ) : null;
};
