import { Button, Container, Form, Row, Col, Image } from "react-bootstrap";
import { JobList } from "../../components/JobList";
import http from "../../http";

import image4 from "../../lib/04.jpeg";
import { useEffect, useState } from "react";
import { Loading } from "../../components/Loading";
import { useNavigate } from "react-router-dom";
export const Home = () => {
  const [top, setTop] = useState([]);
  const [hot, setHot] = useState([]);
  const [premium, setPremium] = useState([]);
  const [other, setOther] = useState([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [result, setResult] = useState([]);
  const navigate = useNavigate();
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
  const handleChange = (ev) => {
    ev.preventDefault();
    console.log(query);
    if (query) {
      http
        .get(`/front/search/?title=${query}`)
        .then(({ data }) => setResult(data))
        .catch((err) => console.log(err));
    }
    if (!query) {
      setResult([]);
    }
  };
  return (
    <Container fluid>
      {loading ? (
        <Loading></Loading>
      ) : (
        <Container fluid>
          <Row>
            <Col className="m-0 p-0" style={{ position: "relative" }}>
              <Image
                src={image4}
                className="w-100 mt-3"
                style={{ height: "350px" }}
                fluid
              ></Image>

              <Form
                size="lg"
                className="m-0"
                style={{
                  position: "absolute",
                  top: "40%",
                  left: "50%",
                  transform: "translateX(-50%)",
                  zIndex: 1,
                  width: "60%",
                }}
              >
                <Row>
                  <Col xs={10} className="m-0 p-0">
                    <Form.Control
                      size="lg"
                      placeholder="Jobs"
                      className="mx-auto me-0 "
                      onChange={(ev) => {
                        setQuery(ev.target.value);
                        handleChange(ev);
                      }}
                    />
                  </Col>
                  <Col xs={2} className="m-0 p-0">
                    <Button
                      type="button"
                      size="lg"
                      className="m-0 border-0 bg-dark "
                      onClick={() =>
                        query
                          ? navigate(`/result/?title=${query}`).then(
                              () => navigate
                            )
                          : null
                      }
                    >
                      <i className="fa-solid fa-magnifying-glass"></i>
                    </Button>
                  </Col>
                </Row>
              </Form>
              {result.length ? (
                query ? (
                  <Row>
                    <Col
                      className="mt-0 p-0"
                      style={{
                        position: "absolute",
                        top: "55%",
                        left: "40%",
                        transform: "translateX(-40%)",
                        zIndex: 2,
                        width: "50%",
                        background: "black",
                        borderRadius: "10px",
                        maxHeight: "180px",
                        overflow: "scroll",
                        color: "grey",
                      }}
                    >
                      {result.map((data) => {
                        return (
                          <div>
                            <li
                              onClick={() => navigate(`job/${data.job_id}`)}
                              className="text-center text-decoration-none mt-2 custom-list"
                            >
                              {data.title}
                            </li>
                            <hr></hr>
                          </div>
                        );
                      })}
                    </Col>
                  </Row>
                ) : null
              ) : null}
            </Col>
          </Row>
          <Row>
            {hot.length ? (
              <JobList
                title="hot"
                data={hot}
                sortable={["Name", "Salary", "Opening", "Deadline"]}
              ></JobList>
            ) : null}

            {top.length ? (
              <JobList
                title="top"
                data={top}
                sortable={["Name", "Salary", "Opening", "Deadline"]}
              ></JobList>
            ) : null}
            {premium.length ? (
              <JobList
                title="premium"
                data={premium}
                sortable={["Name", "Salary", "Opening", "Deadline"]}
              ></JobList>
            ) : null}
            {other.length ? (
              <JobList
                title="other"
                data={other}
                sortable={["Name", "Salary", "Opening", "Deadline"]}
              ></JobList>
            ) : null}
          </Row>
        </Container>
      )}
    </Container>
  );
};
