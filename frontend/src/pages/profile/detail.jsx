import { useState } from "react";
import { Container, Row, Col, Form, Image } from "react-bootstrap";
import { SubmitBtn, FormField } from "../../components/index";
import img from "../../lib/img1.jpg";

export const Detail = () => {
  const [form, setForm] = useState({});
  return (
    <Container fluid>
      <Row>
        <Col
          xs={12}
          className="d-flex flex-row justify-content-center align-items-center"
          style={{
            height: "300px",
            background: "linear-gradient(to right, #2196F3, #0D47A1)",
            boxShadow: "3px 0 10px red",
          }}
        >
          <Row>
            <Col xs={12} md="auto" className="">
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

                    boxShadow: "2px 2px 8px black",
                  }}
                  className=""
                ></Image>
              </div>
            </Col>

            <Col xs={12} md="auto" className="">
              <h1
                className="text-nowrap bg-secondary rounded-2 px-2 mt-5 "
                style={{ boxShadow: "2px 2px 8px black" }}
              >
                Company Name Pvt. Ltd
              </h1>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
