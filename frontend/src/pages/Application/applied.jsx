import { useState } from "react";
import { Row, Col, Card, Button, Modal, Form } from "react-bootstrap";
import { Create } from "./Create";
export const Applied = () => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <Col xs={12} className="">
      <Row>
        <Col xs={12} md={7} className="mx-auto  mt-3">
          <Card
            style={{
              background:
                "linear-gradient(to right, #ffd700, #ffdb58, #ffdf87, #ffe8a6, #ffeebd, #fff4d3)",
            }}
          >
            <Card.Body>
              <Card.Title>Job Title</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Job Category
              </Card.Subtitle>
              <Card.Text>Description of Job</Card.Text>
            </Card.Body>
            <Row>
              <Col className="d-flex flex-row justify-content-evenly">
                <Button
                  variant="dark"
                  className="m-1"
                  onClick={() => setModalShow(!modalShow)}
                >
                  Cancel
                </Button>

                <Button variant="dark" className="m-1">
                  Status
                </Button>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
      <Modal show={modalShow} onHide={() => setModalShow(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Cancel Bhai!! Cancel!!</Modal.Title>
        </Modal.Header>

        <Modal.Body>Accept navayera cancel ho ki k ho???</Modal.Body>
        <Modal.Footer className="d-flex flex-row justify-content-evenly">
          <Button type="submit" variant="success" size="lg" className="mb-2">
            NO
          </Button>
          <Button variant="danger" size="lg" className="mb-2 me-2">
            YES
          </Button>
        </Modal.Footer>
      </Modal>
    </Col>
  );
};
