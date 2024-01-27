import { Button, Container, Form, Row, Col, Carousel } from "react-bootstrap";
import { JobList } from "../../components/JobList";
import image1 from "../../lib/01.jpeg";
import image2 from "../../lib/02.png";
import image3 from "../../lib/03.jpeg";
import image4 from "../../lib/04.jpeg";
export const Home = () => {
  return (
    <Container>
      <Row>
        <Col style={{ position: "relative" }}>
          <Carousel
            className="w-100 px-3 mt-3"
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
            className="form-inline d-inline"
            style={{
              position: "absolute",
              top: "40%",
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: 1,
              boxShadow: "5px 5px 15px black",
            }}
          >
            <Row>
              <Col xs={12} md={7} className="pe-0 ps-0">
                <Form.Group>
                  <Form.Control
                    size="lg"
                    placeholder="Jobs"
                    className="mx-auto me-0"
                  />
                </Form.Group>
              </Col>
              <Col xs={8} md={3} className="ps-0 pe-0">
                <Form.Group>
                  <Form.Select size="lg" className=" ms-0">
                    <option>Category</option>
                    <option>Bank</option>
                    <option>Health</option>
                    <option>Business</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col xs={4} md={2}>
                <Form.Group>
                  <Button
                    type="search"
                    size="lg"
                    className="m-0 ms-0 border-0 bg-dark"
                  >
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </Button>
                </Form.Group>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
      <JobList title="top"></JobList>
    </Container>
  );
};
