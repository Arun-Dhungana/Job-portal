import { Container, Row, Col, Button, Form } from "react-bootstrap";

export const List = () => {
  return (
    <Container>
      <Row>
        <Col xs={12}>
          <h1 className="text-center mb-3">Applications</h1>
        </Col>
        <Row>
          <Col style={{ border: "3px solid grey" }} className="pt-3">
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
                  <Form.Control type="text"></Form.Control>
                </Col>
              </Row>
              <Row>
                <Col className="d-flex flex-row justify-content-end">
                  <Button variant="danger" className="p-1 px-3 mb-2 me-2">
                    Reject
                  </Button>
                  <Button
                    type="submit"
                    variant="success"
                    size="sm"
                    className="mb-2 me-2"
                  >
                    Accept
                    <i className={` fa-solid px-3`}></i>
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
