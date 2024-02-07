import React, { useEffect, useState } from "react";
import { Row, Container } from "react-bootstrap";
import { JobList } from "../../components/JobList";
import { Loading } from "../../components/Loading";
import http from "../../http";
export const Top = () => {
  const [top, setTop] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    http
      .get("/front/top")
      .then(({ data }) => setTop(data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);
  return loading ? (
    <Loading></Loading>
  ) : (
    <Container>
      <Row>
        <JobList
          title="top"
          data={top}
          sortable={["Name", "Salary", "Opening", "Deadline"]}
        ></JobList>
      </Row>
    </Container>
  );
};
