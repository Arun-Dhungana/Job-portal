import { Button, Container, Form, Row, Col, Carousel } from "react-bootstrap";
import { JobList } from "../../components/JobList";
import image1 from "../../lib/01.jpeg";
import image2 from "../../lib/02.png";
import image3 from "../../lib/03.jpeg";
import image4 from "../../lib/04.jpeg";
export const Home = () => {
  return (
    <Container>
      <Row style={{ position: "relative" }}>
        <Carousel
          className="w-100 px-3"
          style={{ height: "350px", position: "relative" }}
        >
          <Carousel.Item interval={1000}>
            <img
              style={{ width: "100%", height: "350px", objectFit: "fill" }}
              src={image1}
            ></img>
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img
              style={{ width: "100%", height: "350px", objectFit: "fill" }}
              src={image2}
            ></img>
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img
              style={{ width: "100%", height: "350px", objectFit: "fill" }}
              src={image3}
            ></img>
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img
              style={{
                width: "100%",
                height: "350px",
                objectFit: "fill",
              }}
              src={image4}
            ></img>
          </Carousel.Item>
        </Carousel>
        <Form
          inline
          style={{
            position: "absolute",
            top: "20px",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 1,
          }}
        >
          <Row className="d-flex flex-row justify-content-center mt-2 ">
            <Col xs={5} md={3} className=" m-0 pe-sm-0">
              <Form.Control
                size="lg"
                placeholder="Jobs"
                className="mx-auto me-0"
              />
            </Col>
            <Col xs={5} md={3} className="m-0 ps-sm-0 ">
              <Form.Select size="lg" className=" ms-0">
                <option>Choose a Category</option>
                <option>Bank</option>
                <option>Health</option>
                <option>Business</option>
              </Form.Select>
            </Col>
            <Col xs={2} md={2}>
              <Button
                type="search"
                size="lg"
                className="m-0 ms-0 border-0 bg-dark"
              >
                <i className="fa-solid fa-magnifying-glass"></i>
              </Button>
            </Col>
          </Row>
        </Form>
      </Row>
      <JobList></JobList>
    </Container>
  );
};
