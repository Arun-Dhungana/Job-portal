import { Col, Row, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import http from "../../http";

export const Manage = () => {
  const [loading, setLoading] = useState(false);

  const [job, setJob] = useState([]);

  useEffect(() => {
    setLoading(true);
    http
      .get(`/profile/jobs`)
      .then(({ data }) => setJob(data))
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setLoading(false));
  }, []);
  return loading ? (
    <Loading></Loading>
  ) : job.length ? (
    job.map((jobs) => {
      return (
        <Col xs={12} className="">
          <Row>
            <Col xs={12} md={7} className="mx-auto  my-3">
              <Card
                style={{
                  background:
                    " linear-gradient(to right, #00ff00, #33cc33, #66cc66, #99cc99, #b2d8b2, #ccffcc)",
                }}
              >
                <Card.Body>
                  <Card.Title>{jobs.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {jobs.category}
                  </Card.Subtitle>
                  <Card.Text>{jobs.description}</Card.Text>

                  <Row>
                    <Col xs={12} md={6}>
                      <Card.Link
                        as={Link}
                        to={`/job/edit/${jobs.job_id}`}
                        className=""
                      >
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
                      <Card.Link
                        as={Link}
                        to={`/application/list/${jobs.job_id}`}
                      >
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
    })
  ) : null;
};
