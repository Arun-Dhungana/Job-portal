import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

export const List = () => {
  const handleAccept = () =>
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className="custom-ui">
            <h1>Accept</h1>
            <p>Are you sure to accept ?? </p>
            <Button type="button" variant="danger" onClick={onClose}>
              No
            </Button>
            <Button type="button" variant="success" onClick={onClose}>
              Yes
            </Button>
          </div>
        );
      },
    });

  const handleReject = () => {};
  return (
    <Container>
      <Row>
        <Col xs={12}>
          <h1 className="text-center mb-3">Applications</h1>
        </Col>
        <Row>
          <Col
            xs={12}
            md={7}
            style={{
              border: "3px solid grey",
              background:
                "linear-gradient(to right, #0000ff, #3366cc, #6699cc, #99b2cc, #b2d8e6, #cce5ff)",
            }}
            className="pt-3 mx-auto"
          >
            <Form>
              <Row>
                <Col xs={4} className="mb-3 text-center">
                  <label style={{ fontWeight: "bolder", fontSize: "20px" }}>
                    Name:
                  </label>
                </Col>
                <Col xs={8} className="mb-3">
                  <Form.Control
                    type="text"
                    value="Arun Dhungana"
                    disabled
                  ></Form.Control>
                </Col>
              </Row>
              <Row>
                <Col xs={4} className="mb-3 text-center">
                  <label style={{ fontWeight: "bolder", fontSize: "20px" }}>
                    Email:
                  </label>
                </Col>
                <Col xs={8} className="mb-3">
                  <Form.Control type="text" disabled></Form.Control>
                </Col>
              </Row>
              <Row>
                <Col className="d-flex flex-row justify-content-end">
                  <Button
                    variant="danger"
                    className="p-1 px-3 mb-2 me-2"
                    onClick={handleReject}
                  >
                    Reject
                  </Button>
                  <Button
                    type="button"
                    variant="success"
                    size="sm"
                    className="mb-2 me-2 "
                    onClick={handleAccept}
                  >
                    Accept
                    <i className={` fa-solid fa-save px-3`}></i>
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Row>
    </Container>
  );
};
