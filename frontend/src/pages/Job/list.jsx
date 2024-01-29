import { Create } from "../Application/Create";
import { useState } from "react";
import { Button, Col, Row, Table, Image, Card } from "react-bootstrap";
import img from "../../lib/img1.jpg";
import { useNavigate } from "react-router-dom";
export const List = () => {
  const [modalShow, setModalShow] = useState(false);
  const navigate = useNavigate();
  return (
    <Col xs={12}>
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
        <Col sm={12} md={9} className="mt-5">
          <h1>Job title</h1>
          <h6 className="ms-3 mt-3 text-secondary mb-5">Company name</h6>
          <Card>
            <Card.Header>
              <h5>Details/Requirement</h5>
            </Card.Header>
            <Card.Body>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
              assumenda, iure quaerat officia corrupti consequuntur officiis
              aut, sunt odit velit voluptatem voluptatum nemo nostrum, veritatis
              fuga voluptates ipsam necessitatibus praesentium.
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={3} className="mt-5">
          <h4>Job Overview</h4>
          <Table striped bordered hover size="sm">
            <tbody>
              <tr>
                <td>Title</td>
                <td>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Ipsam alias quam beatae in quibusdam eaque natus, vero qui ex?
                  Repellendus beatae vero fugit praesentium, reiciendis quas
                  deserunt ducimus minima ipsa.
                </td>
              </tr>
              <tr>
                <td>No. of posts</td>
                <td>Jacob</td>
              </tr>
              <tr>
                <td>Experience</td>
                <td>Jacob</td>
              </tr>
              <tr>
                <td>Education</td>
                <td>Jacob</td>
              </tr>
              <tr>
                <td>Salary</td>
                <td>Jacob</td>
              </tr>
              <tr>
                <td>Location</td>
                <td>Jacob</td>
              </tr>

              <tr>
                <td>Level</td>
                <td>Jacob</td>
              </tr>
              <tr>
                <td>Opening</td>
                <td>Jacob</td>
              </tr>
              <tr>
                <td>Deadline</td>
                <td>Jacob</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
      <Row>
        <Col xs={12} className="my-3 d-flex flex-row justify-content-evenly">
          <Button onClick={() => navigate(-1)} size="lg" variant="danger">
            Back
          </Button>
          <Button
            className="ps-4 pe-4"
            size="lg"
            variant="success"
            onClick={() => setModalShow(!modalShow)}
          >
            Apply
          </Button>

          <Create show={modalShow} onHide={() => setModalShow(false)} />
        </Col>
      </Row>
    </Col>
  );
};
