import { Col, Row, Image } from "react-bootstrap";
import img1 from "../lib/img1.jpg";
import { imageURL } from "../lib/index";
import { Link, NavLink, useNavigate } from "react-router-dom";
export const JobCard = ({ data }) => {
  const navigate = useNavigate();
  return data.length
    ? data.map((dataa) => {
        return (
          <Col xs={12} sm={6} md={4} lg={3} xlg={2} className=" mb-3 ">
            <Col
              xs={12}
              style={{
                borderRadius: "4px",
                boxShadow: "0 0 5px black",
              }}
              className="ps-2 bg-light"
            >
              <Row className="h-100">
                <Col
                  xs={4}
                  sm={4}
                  md={3}
                  className="d-flex flex-row justify-content-center"
                >
                  <Image
                    as={NavLink}
                    to={`company/${dataa.company_id}`}
                    className="pt-1"
                    style={{ height: "40px", width: "40px" }}
                    src={imageURL(dataa.image)}
                  ></Image>
                </Col>
                <Col xs={8} sm={8} md={9}>
                  <Row>
                    <Col
                      xs={12}
                      className="text-nowrap w-100"
                      style={{
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      <Link
                        style={{
                          textDecoration: "none",
                          color: "blue",
                          fontWeight: "bold",
                        }}
                        to={`job/${dataa.job_id}`}
                      >
                        {dataa.title}
                      </Link>
                    </Col>
                    <Col
                      xs={12}
                      className="text-nowrap w-100"
                      style={{
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      <Link
                        style={{
                          textDecoration: "none",
                          color: "grey",
                          fontSize: "10px",
                        }}
                        to={`company/${dataa.company_id}`}
                      >
                        {dataa.name}
                      </Link>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Col>
        );
      })
    : null;
};
