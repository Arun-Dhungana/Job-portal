import { Form } from "react-bootstrap";
import { SubmitBtn } from "../../components";
import { FormField } from "../../components";
import { setInForm } from "../../lib";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import http from "../../http";
import { Row, Col } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { Loading } from "../../components/Loading";
export const Edit = () => {
  const user = useSelector((state) => state.user.value);
  const [form, setForm] = useState({});
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const params = useParams();
  useEffect(() => {
    setLoading(true);
    http
      .get(`/cms/company/detail/${params.id}`)
      .then(({ data }) => setData(data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [params.id]);
  useEffect(() => {
    if (data.length) {
      setForm({
        contact_person: data[0].contact_person,
        description: data[0].description,
        contact_no: data[0].contact_no,
        address: data[0].address,
        email: data[0].email,
      });
    }
  }, [data]);
  const handleSubmit = (ev) => {
    ev.preventDefault();
    setLoading(true);
    http
      .put(`/cms/company/update/${data[0]._id}`, form)
      .then(() => navigate("/"))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  };
  return data.length ? (
    <Col xs={12}>
      <Row>
        <Col
          xs={12}
          md={6}
          className="mx-auto p-3 my-2"
          style={{ borderRadius: "0", boxShadow: "0 0 10px black" }}
        >
          <h1 className="text-center text-secondary"> Edit contact person</h1>
          <Form onSubmit={handleSubmit}>
            <FormField title="name" label="Name">
              <Form.Control
                id="name"
                name="contact_person"
                type="text"
                defaultValue={form.contact_person}
                onChange={(ev) => setInForm(ev, form, setForm)}
                className="border border-dark "
              ></Form.Control>
            </FormField>
            <FormField title="email" label="Email">
              <Form.Control
                id="email"
                type="email"
                name="email"
                defaultValue={form.email}
                onChange={(ev) => setInForm(ev, form, setForm)}
                className="border border-dark "
              ></Form.Control>
            </FormField>
            <FormField title="number" label="Number">
              <Form.Control
                id="number"
                type="number"
                name="contact_no"
                defaultValue={form.contact_no}
                onChange={(ev) => setInForm(ev, form, setForm)}
                className="border border-dark "
              ></Form.Control>
            </FormField>
            <FormField title="address" label="Address">
              <Form.Control
                id="address"
                type="text"
                name="address"
                defaultValue={form.address}
                onChange={(ev) => setInForm(ev, form, setForm)}
                className="border border-dark "
              ></Form.Control>
            </FormField>
            <FormField title="description" label="Description/Post">
              <Form.Control
                id="description"
                type="text"
                name="description"
                defaultValue={form.description}
                onChange={(ev) => setInForm(ev, form, setForm)}
                className="border border-dark "
              ></Form.Control>
            </FormField>
            <SubmitBtn
              title="Update"
              variant1="dark"
              variant2="success"
              icon="fa-wrench"
              loading={loading}
            ></SubmitBtn>
          </Form>
        </Col>
      </Row>
    </Col>
  ) : (
    <Loading></Loading>
  );
};
