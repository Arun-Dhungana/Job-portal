import { Col, Container, Row } from "react-bootstrap";

export const Loading = () => {
  return (
    <Container>
      <Row>
        <Col xs={12}>
          <h1 className="text-center mt-3">
            <i className=" ps-2 fa-solid fa-gear fa-spin fa-spin-reverse"></i>
            Loading
            <i className=" ps-2 fa-solid fa-gear fa-spin fa-spin-reverse"></i>
          </h1>
        </Col>
      </Row>
    </Container>
  );
};
