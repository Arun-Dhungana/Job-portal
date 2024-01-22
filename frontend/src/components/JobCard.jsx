import { Col, Row, Image } from "react-bootstrap";
import img1 from "../lib/img1.jpg";
export const JobCard = () => {
  return (
    <Col xs={12} sm={6} md={4} lg={3} xlg={2} className="ps-2 mb-3 ">
      <Col
        xs={12}
        style={{
          borderRadius: "4px",
          boxShadow: "0 0 5px black",
        }}
        className="ps-2 bg-light"
      >
        <Row className="h-100">
          <Col xs={2} sm={4} md={3}>
            <Image
              className="p-1"
              style={{ height: "100%", width: "100%", borderRadius: "50%" }}
              src={img1}
            ></Image>
          </Col>
          <Col xs={10} sm={8} md={9}>
            <Row>
              <Col
                xs={12}
                className="text-nowrap w-100"
                style={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  color: "red",
                }}
              >
                Company Name
              </Col>
              <Col
                xs={12}
                className="text-nowrap w-100"
                style={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  color: "blue",
                }}
              >
                Company Name Company Name Company Name Company Name Company Name
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Col>
  );
};
