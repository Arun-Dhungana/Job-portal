import { useState } from "react";
import { Container, Row, Col, Form, Image, Button } from "react-bootstrap";
import { SubmitBtn, FormField } from "../../components/index";
import img from "../../lib/img1.jpg";
import { setInForm } from "../../lib";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
export const EditProfile = () => {
  const [form, setForm] = useState({});

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const handleSubmit = (ev) => {
    ev.preventDefault();
    setLoading(true);
    http.put();
  };
  return (
    <Row>
      <Col xs={12} className="">
        <Row>
          <Col
            xs={12}
            md={12}
            className="d-flex flex-row justify-content-center mb-3"
          >
            <div
              className=""
              style={{
                position: "relative",
                width: "125px",
                height: "125px",
              }}
            >
              <Image
                src={img}
                style={{
                  width: "120px",
                  height: "120px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  display: "inline-flex",
                  boxShadow: "2px 2px 8px black",
                  margin: "5px",
                }}
                className=""
              ></Image>
              <i
                className="fa-solid fa-camera-rotate"
                style={{
                  position: "absolute",
                  right: "20px",
                  top: "5px",
                  zIndex: "1",
                  fontSize: "25px",
                  color: "white",
                  cursor: "pointer",
                }}
              ></i>
            </div>
          </Col>

          <Col xs={12} md={8} className="text-center mx-auto">
            <Form>
              <FormField label="Name" title="name" className="">
                <Form.Control
                  id="name"
                  type="text"
                  onChange={(ev) => setInForm(ev, form, setForm)}
                  className="border border-dark "
                  style={{}}
                ></Form.Control>
              </FormField>
              <FormField label="Number" title="number">
                <Form.Control
                  id="number"
                  type="number"
                  onChange={(ev) => setInForm(ev, form, setForm)}
                  className="border border-dark "
                  style={{}}
                ></Form.Control>
              </FormField>
              <FormField label="Description" title="description" className="">
                <Form.Control
                  id="description"
                  type="text"
                  as="textarea"
                  onChange={(ev) => setInForm(ev, form, setForm)}
                  className="border border-dark "
                  style={{}}
                ></Form.Control>
              </FormField>
            </Form>
          </Col>

          <SubmitBtn
            title="Update"
            icon="fa-wrench"
            variant1="danger"
            variant2="success"
            loading={loading}
          ></SubmitBtn>
        </Row>
      </Col>
    </Row>
  );
};
