import { Col, Row, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
export const Manage = () => {
  return (
    <Col xs={12} className="">
      <Row>
        <Col xs={12} md={7} className="mx-auto  mt-3">
          <Card
            style={{
              background:
                " linear-gradient(to right, #00ff00, #33cc33, #66cc66, #99cc99, #b2d8b2, #ccffcc)",
            }}
          >
            <Card.Body>
              <Card.Title>Job Title</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Job Category
              </Card.Subtitle>
              <Card.Text>Description of Job</Card.Text>

              <Row>
                <Col xs={12} md={6}>
                  <Card.Link as={Link} to="/job/edit/123" className="">
                    Edit
                  </Card.Link>
                </Col>
                <Col
                  xs={12}
                  md={6}
                  className="text-md-center "
                  style={{
                    textWrap: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  <Card.Link as={Link} to="/application/list/123">
                    See the appilcants
                    <i className="fa-solid fa-angles-right"></i>
                  </Card.Link>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Col>
  );
};
