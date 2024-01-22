import { Col, Row } from "react-bootstrap";
import { JobCard } from "./JobCard";
export const JobList = () => {
  return (
    <Col
      xs={12}
      className="mt-3 mb-3  "
      style={{ boxShadow: "4px 4px 10px black" }}
    >
      <Row>
        <Col xs={12}>
          <Row>
            <Col xs={12}>
              <h1
                style={{
                  background:
                    "linear-gradient(to right, white, lightgrey, grey, darkgrey,white)",
                }}
                className=" ps-4"
              >
                Jobs
              </h1>
            </Col>
          </Row>
          <Row className="justify-content-center bg-secondary pt-2">
            <JobCard></JobCard>
            <JobCard></JobCard>
            <JobCard></JobCard>
            <JobCard></JobCard>
            <JobCard></JobCard>
            <JobCard></JobCard>

            <JobCard></JobCard>
            <JobCard></JobCard>
            <JobCard></JobCard>
          </Row>
        </Col>
      </Row>
    </Col>
  );
};
