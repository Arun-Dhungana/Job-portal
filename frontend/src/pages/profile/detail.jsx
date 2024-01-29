import { useEffect, useState } from "react";
import { Container, Row, Col, Form, Image, Button } from "react-bootstrap";
import { SubmitBtn, FormField } from "../../components/index";
import img from "../../lib/img1.jpg";
import { useSelector } from "react-redux";
import http from "../../http";
export const Detail = () => {
  const [form, setForm] = useState({});
  
  const user = useSelector((state) => state.user.value);
  useEffect(()=>{}, []);
  return (
    <Container fluid>
      <Row
        style={{
          background: "linear-gradient(to right, #2196F3, #0D47A1)",
          boxShadow: "0 0 20px red",
          height: "300px",
        }}
      >
        <Col
          xs={12}
          md={4}
          style={{
            height: "",
          }}
          className="d-flex flex-row  justify-content-sm-center justify-content-md-end  align-items-center"
        >
          <Image
            src={img}
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "50%",
              objectFit: "",
            }}
          ></Image>
        </Col>

        <Col
          xs={12}
          md={8}
          className="d-flex flex-row justify-content-sm-center  justify-content-md-start align-items-center "
        >
          <h1
            className=" bg-secondary rounded-2 px-2   "
            style={{ boxShadow: "2px 2px 8px black" }}
          >
            Company Name Pvt. Ltd
          </h1>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={8} className="mx-auto my-3">
          <h1 className="text-center my-5">Personal Detail</h1>
          <Form>
            <FormField title="name" label="Name">
              <Form.Control id="name" className="border-botto"></Form.Control>
            </FormField>
            <FormField title="email" label="Email">
              <Form.Control id="email" className="border-botto"></Form.Control>
            </FormField>
            <FormField title="number" label="Number">
              <Form.Control id="number" className="border-botto"></Form.Control>
            </FormField>
            <FormField title="description" label="Description">
              <Form.Control
                id="description"
                className="border-botto"
              ></Form.Control>
            </FormField>
          </Form>
        </Col>
      </Row>
      {Object.keys(user).length ? (
        user.role == "company" ? (
          <Row>
            <Col xs={12} md={8} className="mx-auto my-3">
              <h1 className="text-center my-5">Contact Person's Detail</h1>
              <Form>
                <FormField title="name" label="Name">
                  <Form.Control
                    id="name"
                    className="border-botto"
                  ></Form.Control>
                </FormField>
                <FormField title="email" label="Email">
                  <Form.Control
                    id="email"
                    className="border-botto"
                  ></Form.Control>
                </FormField>
                <FormField title="number" label="Number">
                  <Form.Control
                    id="number"
                    className="border-botto"
                  ></Form.Control>
                </FormField>
                <FormField title="address" label="Address">
                  <Form.Control
                    id="address"
                    className="border-botto"
                  ></Form.Control>
                </FormField>
                <FormField title="description" label="Description/Post">
                  <Form.Control
                    id="description"
                    className="border-botto"
                  ></Form.Control>
                </FormField>
              </Form>
            </Col>
          </Row>
        ) : null
      ) : null}
      <Row>
        <Col className="d-flex flex-row justify-content-center my-2">
          <Button className="ps-4 pe-4">
            <i className="fa-solid fa-pen-ruler pe-2"></i>Edit
          </Button>
        </Col>
      </Row>
    </Container>
  );
};
