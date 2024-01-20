import { useState } from "react";
import { Container, Row, Col, Form, Image, Button } from "react-bootstrap";
import { SubmitBtn, FormField } from "../../components/index";
import img from "../../lib/img1.jpg";
import { setInForm } from "../../lib";
import { useNavigate } from "react-router-dom";

export const EditProfile = () => {
  const [form, setForm] = useState({});
  const navigate = useNavigate();
  return (
    <Container fluid>
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

            <Col xs={12}></Col>
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
                <Row>
                  <Col className="d-flex flex-row justify-content-around">
                    <Button
                      className="bg-dark border border-none p-1 px-3"
                      onClick={() => navigate(-1)}
                    >
                      Back
                    </Button>
                    <SubmitBtn title="Update" icon="fa-wrench"></SubmitBtn>
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
