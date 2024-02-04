import { Container, Row, Col, Carousel, Button } from "react-bootstrap";
import image1 from "../../lib/01.jpeg";
import image2 from "../../lib/02.png";
import image3 from "../../lib/03.jpeg";
import image4 from "../../lib/04.jpeg";
import { useSelector } from "react-redux";
export const About = () => {
  const user = useSelector((state) => {
    console.log(state.user.value);
    return state.user.value;
  });
  if (Object.keys(user).length) {
    console.log("hello");
  }
  return (
    <Container>
      <Row>
        <Row>
          <Col xs={12} className=" my-3">
            <Carousel className="" style={{ height: "350px" }}>
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
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <h2
              className="text-center my-5"
              style={{ fontWeight: "bold", color: "purple" }}
            >
              Our Services
            </h2>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={4}>
            <div
              className="p-2 mb-4 "
              style={{
                position: "relative",
                boxShadow: "4px 4px 8px blue",
              }}
            >
              <h3 className="text-center">Vacancy Announcement</h3>
              <p>
                JobHub vacancy announcements are the means by which an
                organization advertises its vacancies on our...
              </p>
              <div className="d-flex flex-row justify-content-center">
                <Button type="button" variant="info">
                  Explore
                </Button>
              </div>
              <i
                className="fa-solid fa-folder-open"
                style={{
                  position: "absolute",
                  top: "-8%",
                  left: "45%",
                  zIndex: 1,
                  fontSize: "25px",
                  color: "red",
                }}
              ></i>
            </div>
          </Col>
          <Col xs={12} md={4}>
            <div
              style={{
                position: "relative",
                boxShadow: "4px 4px 8px red",
              }}
              className="p-2 mb-4 abouttwo"
            >
              <h3 className="text-center">Direct Recruitment</h3>
              <p>
                The purpose of this procedure is to identify the direct
                recruitment and selection process for employing staffs a...
              </p>
              <div className="d-flex flex-row justify-content-center">
                <Button type="button" variant="info">
                  Explore
                </Button>
              </div>
              <i
                className="fa-solid fa-skull"
                style={{
                  position: "absolute",
                  top: "-8%",
                  left: "45%",
                  zIndex: 1,
                  fontSize: "25px",
                  color: "blue",
                }}
              ></i>
            </div>
          </Col>
          <Col xs={12} md={4}>
            <div
              style={{
                position: "relative",
                boxShadow: "4px 4px 8px blue",
              }}
              className="p-2 mb-4 aboutone"
            >
              <h3 className="text-center">Banner Advertisement</h3>
              <p>
                Online website banner ads provide an instant global reach at
                relatively low cost.You have to...
              </p>
              <div className="d-flex flex-row justify-content-center">
                <Button type="button" variant="info">
                  Explore
                </Button>
              </div>
              <i
                className="fa-solid fa-calendar"
                style={{
                  position: "absolute",
                  top: "-8%",
                  left: "45%",
                  zIndex: 1,
                  fontSize: "25px",
                  color: "red",
                }}
              ></i>
            </div>
          </Col>
        </Row>
      </Row>
    </Container>
  );
};
