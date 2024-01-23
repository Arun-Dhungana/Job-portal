import { Col, Row } from "react-bootstrap";
import { JobCard } from "./JobCard";
export const JobList = ({ title }) => {
  return (
    <Col
      xs={12}
      className="mt-3 mb-3  "
      style={{ boxShadow: "4px 4px 10px black", background: "lightgrey" }}
    >
      <Row>
        <Col xs={12}>
          <Row>
            <Col xs={12} className="mb-0">
              <h1
                style={{
                  background:
                    "linear-gradient(to right, white, lightgrey, grey, darkgrey,white)",
                }}
                className=" ps-4 text-capitalize"
              >
                {title} Jobs
              </h1>
            </Col>
          </Row>
          <Row className="justify-content-center ps-2 pe-2">
            <Col className="">
              <Row>
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
      </Row>
    </Col>
  );
};
