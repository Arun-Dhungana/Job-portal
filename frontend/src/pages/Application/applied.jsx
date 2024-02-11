import { useEffect, useState } from "react";
import { Row, Col, Card, Button, Modal, Form } from "react-bootstrap";

import { Link, useNavigate, useParams } from "react-router-dom";
import http from "../../http";
import { Loading } from "../../components/Loading";
export const Applied = () => {
  const [modalShow, setModalShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [job, setJob] = useState([]);
  const navigate = useNavigate();
  const params = useParams();
  useEffect(() => {
    setLoading(true);
    http
      .get(`/profile/applied_jobs/${params.id}`)
      .then(({ data }) => setJob(data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);
  const handleCancel = ({ id }) => {
    setLoading(true);
    http
      .get(`/cms/apply/delete/${id}`)
      .then(() => setLoading(false))
      .catch((er) => console.log(err))
      .finally(() => navigate(`/`));
  };
  return loading ? (
    <Loading></Loading>
  ) : job.length ? (
    job.map((jobs) => {
      return (
        <Col xs={12} className="">
          <Row>
            <Col xs={12} md={7} className="mx-auto  mt-3">
              <Card
                style={{
                  background:
                    "linear-gradient(to right, #ffd700, #ffdb58, #ffdf87, #ffe8a6, #ffeebd, #fff4d3)",
                }}
              >
                <Card.Body>
                  <Card.Title>{jobs.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {jobs.category.toUpperCase()}
                  </Card.Subtitle>
                  <Card.Text
                    className="text-nowrap"
                    style={{ overflow: "hidden", textOverflow: "ellipsis" }}
                  >
                    {jobs.description}
                  </Card.Text>
                </Card.Body>
                <Row>
                  <Col className="d-flex flex-row justify-content-evenly">
                    <Button
                      as={Link}
                      variant="dark"
                      className="m-1"
                      onClick={() => setModalShow(!modalShow)}
                    >
                      Cancel
                    </Button>
                    {console.log(jobs.status)}
                    <Button
                      variant={
                        jobs.status == "pending"
                          ? "info"
                          : jobs.status == "accepted"
                          ? "success"
                          : "danger"
                      }
                      className="mb-1"
                    >
                      {jobs.status.toUpperCase()}
                    </Button>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
          <Modal show={modalShow} onHide={() => setModalShow(false)} size="lg">
            <Modal.Header closeButton>
              <Modal.Title>Cancel Bhai!! Cancel!!</Modal.Title>
            </Modal.Header>

            <Modal.Body>Accept navayera cancel ho ki k ho???</Modal.Body>
            <Modal.Footer className="d-flex flex-row justify-content-evenly">
              <Button
                type="submit"
                variant="success"
                size="lg"
                className="mb-2"
                onClick={() => setModalShow(false)}
              >
                NO
              </Button>
              <Button
                variant="danger"
                size="lg"
                className="mb-2 me-2"
                onClick={() => handleCancel({ id: jobs.id })}
              >
                YES
                <i
                  className={` fa-solid ${
                    loading ? "fa-spinner fa-spin" : "fa-save"
                  } p-1 `}
                ></i>
              </Button>
            </Modal.Footer>
          </Modal>
        </Col>
      );
    })
  ) : (
    <h1 className="text-center text-secondary">
      You haven't applied any jobs yet!
    </h1>
  );
};
