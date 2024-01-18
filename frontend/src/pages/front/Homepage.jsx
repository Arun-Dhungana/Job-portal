import { Button, Container, Form, Row, Col, Dropdown } from "react-bootstrap";

export const Home = () => {
  return (
    <Container>
      <Row className="d-flex flex-row justify-content-center mt-2 ">
        <Col xs={5} md={3} className=" m-0 pe-sm-0">
          <Form.Control placeholder="Jobs" className="mx-auto me-0" />
        </Col>
        <Col xs={5} md={3} className="m-0 ps-sm-0 ">
          <Form.Select className=" ms-0">
            <option>Choose a Category</option>
            <option>Bank</option>
            <option>Health</option>
            <option>Business</option>
          </Form.Select>
        </Col>
        <Col xs={2} md={2}>
          <Button type="search" className="m-0  border-0 bg-dark">
            <i className="fa-solid fa-magnifying-glass"></i>
          </Button>
        </Col>
      </Row>
    </Container>
  );
};
