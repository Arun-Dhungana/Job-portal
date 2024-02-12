import { useEffect, useState } from "react";
import React from "react";
import { Container, Row, Col, Form, Image, Button } from "react-bootstrap";
import { FormField } from "../../components/index";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import http from "../../http";
import { useNavigate, useParams, Link } from "react-router-dom";
import { imageURL } from "../../lib";
export const Detail = () => {
  const user = useSelector((state) => state.user.value);
  const navigate = useNavigate();
  const params = useParams();
  const [form, setForm] = useState({});
  const [company, setCompany] = useState({});
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    http
      .get(`/cms/company/detail/${params.id}`)
      .then(({ data }) => setCompany(data))
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false);
      });
  }, [user]);
  useEffect(() => {
    if (Object.keys(user).length) {
      setForm({
        image: user.image,
        name: user.name,
        email: user.email,
        number: user.number,
        description: user.description,
      });
    }
  }, [user]);
  return Object.keys(form).length ? (
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
            src={imageURL(form.image)}
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
            {form.name}
          </h1>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={8} className="mx-auto my-3">
          <h1 className="text-center my-5">Personal Detail</h1>
          <Form>
            <FormField title="name" label="Name">
              <Form.Control
                id="name"
                className="border-botto"
                value={form.name}
                disabled
              ></Form.Control>
            </FormField>
            <FormField title="email" label="Email">
              <Form.Control
                id="email"
                className="border-botto"
                value={form.email}
                disabled
              ></Form.Control>
            </FormField>
            <FormField title="number" label="Number">
              <Form.Control
                id="number"
                className="border-botto"
                value={form.number}
                disabled
              ></Form.Control>
            </FormField>
            <FormField title="description" label="Description">
              <Form.Control
                id="description"
                className="border-botto"
                value={form.description}
                disabled
              ></Form.Control>
            </FormField>
          </Form>
        </Col>
      </Row>
      {Object.keys(user).length ? (
        user.role == "company" ? (
          Object.keys(company).length ? (
            <Row>
              <Col xs={12} md={8} className="mx-auto my-3">
                <h1 className="text-center my-5">Contact Person's Detail</h1>
                <Form>
                  <FormField title="name" label="Name">
                    <Form.Control
                      id="name"
                      className="border-botto"
                      value={company[0].contact_person}
                      disabled
                    ></Form.Control>
                  </FormField>
                  <FormField title="email" label="Email">
                    <Form.Control
                      id="email"
                      className="border-botto"
                      value={company[0].email}
                      disabled
                    ></Form.Control>
                  </FormField>
                  <FormField title="number" label="Number">
                    <Form.Control
                      id="number"
                      className="border-botto"
                      value={company[0].contact_no}
                      disabled
                    ></Form.Control>
                  </FormField>
                  <FormField title="address" label="Address">
                    <Form.Control
                      id="address"
                      className="border-botto"
                      value={company[0].address}
                      disabled
                    ></Form.Control>
                  </FormField>
                  <FormField title="description" label="Description/Post">
                    <Form.Control
                      id="description"
                      className="border-botto"
                      value={company[0].description}
                      disabled
                    ></Form.Control>
                  </FormField>
                </Form>
              </Col>
            </Row>
          ) : null
        ) : null
      ) : null}
      <Row>
        <Col className="d-flex flex-row justify-content-center my-2">
          <Button as={Link} className="ps-4 pe-4" type="button" to="edit">
            <i className="fa-solid fa-pen-ruler pe-2"></i>Edit
          </Button>
        </Col>
      </Row>
    </Container>
  ) : null;
};
