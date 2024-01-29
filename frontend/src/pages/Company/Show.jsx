import { useState } from "react";
import { Button, Col, Row, Table, Image, Card } from "react-bootstrap";
import img from "../../lib/img1.jpg";
import { useNavigate } from "react-router-dom";
export const Show = () => {
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
          className="d-flex flex-row justify-content-sm-center  justify-content-md-start align-items-md-center align-items-sm-start  "
          style={{}}
        >
          <span
            className="p-1"
            style={{
              boxShadow: " 0 0 10px black",
              borderRadius: "0 10px 0 10px",
              textWrap: "none",
              textOverflow: "ellipsis",
              overflow: "hidden",
              fontSize: "17px",
              background: "grey",
              height: "40px",
              textWeight: "bolder",
            }}
          >
            Company Name Pvt. Ltd
          </span>
        </Col>
      </Row>
      <Row>
        <Col sm={12} md={9} className="mt-5">
          <h1 className="mb-5">Detail</h1>
          <i className="fa-solid fa-at pe-2"></i>
          <h5 className="d-inline">Email</h5>
          <br></br>
          <i className="fa-solid fa-phone-volume pe-2"></i>
          <h5 className="d-inline">Number</h5>
          <Card className="mt-5">
            <Card.Header>
              <h5>Description</h5>
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
          <h4 className="text-center">Contact Person's Detail</h4>
          <Table striped bordered hover size="sm">
            <tbody>
              <tr>
                <td>Name</td>
                <td>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Ipsam alias quam beatae in quibusdam eaque natus, vero qui ex?
                  Repellendus beatae vero fugit praesentium, reiciendis quas
                  deserunt ducimus minima ipsa.
                </td>
              </tr>
              <tr>
                <td>Number</td>
                <td>12312321</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>Jacob</td>
              </tr>
              <tr>
                <td>Addressa</td>
                <td>Jacob</td>
              </tr>
              <tr>
                <td>Description</td>
                <td>Jacob</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
      <Row>
        <Col xs={12} className="my-3 ">
          <Button
            onClick={() => navigate(-1)}
            className="ps-4 pe-4"
            variant="primary"
          >
            Back
          </Button>
        </Col>
      </Row>
    </Col>
  );
};
