import { useEffect, useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import http from "../../http";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Loading } from "../../components/Loading";
import { imageURL } from "../../lib";
export const List = () => {
  const [loading, setLoading] = useState(false);
  const [app, setApp] = useState([]);
  const navigate = useNavigate();
  const params = useParams();
  useEffect(() => {
    setLoading(true);
    http
      .get(`/profile/applicants/${params.id}`)
      .then(({ data }) => setApp(data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);
  const handleReject = ({ id }) =>
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div
            className="px-5 py-2"
            style={{ border: "2px solid black", borderRadius: "20px 0 20px 0" }}
          >
            <h1>Reject</h1>
            <hr></hr>
            <p>Are you sure to reject ?? </p>
            <hr></hr>
            <div className="d-flex flex-row justify-content-evenly">
              <Button type="button" variant="danger" onClick={onClose}>
                No
              </Button>
              <Button
                type="button"
                variant="success"
                onClick={() =>
                  http
                    .put(`/cms/apply/update/${id}`, { status: "rejected" })
                    .then(onClose)
                    .catch((err) => console.log(err))
                }
              >
                Yes
              </Button>
            </div>
          </div>
        );
      },
    });

  const handleAccept = ({ id }) =>
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div
            className="px-5 py-2"
            style={{ border: "2px solid black", borderRadius: "20px 0 20px 0" }}
          >
            <h1>Accept</h1>
            <hr></hr>
            <p>Are you sure to accept ?? </p>
            <hr></hr>
            <div className="d-flex flex-row justify-content-evenly">
              <Button type="button" variant="danger" onClick={onClose}>
                No
              </Button>
              <Button
                type="button"
                variant="success"
                onClick={() =>
                  http
                    .put(`/cms/apply/update/${id}`, { status: "accepted" })
                    .then(onClose)
                    .catch((err) => console.log(err))
                }
              >
                Yes
              </Button>
            </div>
          </div>
        );
      },
    });
  const DownloadButton = ({ fileName }) => {
    const fileUrl = imageURL(fileName);
    const link = document.createElement("a");
    link.href = fileUrl;
    link.target = "_blank"; // Open the link in a new tab

    link.download = { fileName };
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <Container>
      {app.length ? (
        app.map((apps) => {
          return (
            <Row>
              <Col xs={12}>
                <h1 className="text-center mb-3"> Applications</h1>
              </Col>
              <Row>
                <Col
                  xs={12}
                  md={7}
                  style={{
                    border: "3px solid grey",
                    background:
                      "linear-gradient(to right, #0000ff, #3366cc, #6699cc, #99b2cc, #b2d8e6, #cce5ff)",
                  }}
                  className="pt-3 mx-auto"
                >
                  <Form>
                    <Row>
                      <Col xs={4} className="mb-3 text-center">
                        <label
                          style={{ fontWeight: "bolder", fontSize: "20px" }}
                        >
                          Name:
                        </label>
                      </Col>
                      <Col xs={8} className="mb-3">
                        <Form.Control
                          type="text"
                          value={apps.name}
                          disabled
                        ></Form.Control>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={4} className="mb-3 text-center">
                        <label
                          style={{ fontWeight: "bolder", fontSize: "20px" }}
                        >
                          Email:
                        </label>
                      </Col>
                      <Col xs={8} className="mb-3">
                        <Form.Control
                          type="text"
                          value={apps.email}
                          disabled
                        ></Form.Control>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="d-flex flex-row justify-content-sm-start justify-content-md-center">
                        <Button
                          type="button"
                          onClick={() =>
                            DownloadButton({ fileName: apps.resume })
                          }
                          variant="dark"
                          className="p-1 m-1"
                        >
                          Resume <i className=" p-1 fa-solid fa-download"></i>
                        </Button>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="d-flex flex-row justify-content-end">
                        <Button
                          variant="danger"
                          className="p-1 px-3 mb-2 me-2"
                          onClick={() => handleReject({ id: apps.id })}
                          size="sm"
                        >
                          Reject
                        </Button>
                        <Button
                          type="button"
                          variant="success"
                          size="sm"
                          className="mb-2 me-2 "
                          onClick={() => handleAccept({ id: apps.id })}
                        >
                          Accept
                          <i className={` fa-solid fa-save px-3`}></i>
                        </Button>
                      </Col>
                    </Row>
                  </Form>
                </Col>
              </Row>
            </Row>
          );
        })
      ) : (
        <h1 className="text-center text-secondary">No applicants</h1>
      )}
    </Container>
  );
};
