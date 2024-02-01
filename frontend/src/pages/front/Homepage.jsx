import { Button, Container, Form, Row, Col, Carousel } from "react-bootstrap";
import { JobList } from "../../components/JobList";
import http from "../../http";
import image1 from "../../lib/01.jpeg";
import image2 from "../../lib/02.png";
import image3 from "../../lib/03.jpeg";
import image4 from "../../lib/04.jpeg";
import { useEffect, useState } from "react";
import { Loading } from "../../components/Loading";
export const Home = () => {
  const [top, setTop] = useState([]);
  const [hot, setHot] = useState([]);
  const [premium, setPremium] = useState([]);
  const [other, setOther] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    http
      .get("/front/top")
      .then(({ data }) => {
        setTop(data);
        return http.get("/front/hot");
      })
      .then(({ data }) => {
        setHot(data);
        return http.get("/front/premium");
      })
      .then(({ data }) => {
        setPremium(data);
        return http.get("/front/normal");
      })
      .then(({ data }) => {
        setOther(data);
      })
      .catch((err) => console.log(err))
      .finally(setLoading(false));
  }, []);
  return (
    <Container>
      {loading ? (
        <Loading></Loading>
      ) : (
        <Container>
          <Row>
            <Col style={{ position: "relative" }}>
              <Carousel className="w-100 px-3 mt-3" style={{ height: "350px" }}>
                <Carousel.Item interval={1000}>
                  <img
                    style={{
                      width: "100%",
                      height: "350px",
                      objectFit: "fill",
                    }}
                    src={image1}
                  ></img>
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                  <img
                    style={{
                      width: "100%",
                      height: "350px",
                      objectFit: "fill",
                    }}
                    src={image2}
                  ></img>
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                  <img
                    style={{
                      width: "100%",
                      height: "350px",
                      objectFit: "fill",
                    }}
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
          <Row>
            <JobList
              title="hot"
              data={hot}
              sortable={["Name", "Salary", "Opening", "Deadline"]}
            ></JobList>
            {console.log(top)}
            <JobList
              title="top"
              data={top}
              sortable={["Name", "Salary", "Opening", "Deadline"]}
            ></JobList>
            <JobList
              title="premium"
              data={premium}
              sortable={["Name", "Salary", "Opening", "Deadline"]}
            ></JobList>
            <JobList
              title="other"
              data={other}
              sortable={["Name", "Salary", "Opening", "Deadline"]}
            ></JobList>
          </Row>
        </Container>
      )}
    </Container>
  );
};
