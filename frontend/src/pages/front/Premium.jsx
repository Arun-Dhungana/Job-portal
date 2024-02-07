import React, { useEffect, useState } from "react";
import { Row, Container } from "react-bootstrap";
import { JobList } from "../../components/JobList";
import { Loading } from "../../components/Loading";
import http from "../../http";
export const Premium = () => {
  const [premium, setPremium] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    http
      .get("/front/premium")
      .then(({ data }) => setPremium(data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);
  return loading ? (
    <Loading></Loading>
  ) : (
    <Container>
      <Row>
        <JobList
          title="premium"
          data={premium}
          sortable={["Name", "Salary", "Opening", "Deadline"]}
        ></JobList>
      </Row>
    </Container>
  );
};
