import { Create } from "../Application/Create";
import { useEffect, useState } from "react";
import { Button, Col, Row, Table, Image, Card } from "react-bootstrap";
import { Loading } from "../../components/Loading";
import http from "../../http";
import { useSelector } from "react-redux";
import { imageURL } from "../../lib";
import { useNavigate, useParams, Link } from "react-router-dom";
import moment from "moment";
export const List = () => {
  const user = useSelector((state) => state.user.value);
  const [modalShow, setModalShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [job, setJob] = useState([]);
  const navigate = useNavigate();
  const params = useParams();
  useEffect(() => {
    setLoading(true);
    http
      .get(`/cms/job/${params.id}`)
      .then(({ data }) => setJob(data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [params.id]);
  return loading ? (
    <Loading></Loading>
  ) : job.length ? (
    <Col xs={12}>
      <Row
        style={{
          background: "linear-gradient(to right, #2196F3, #0D47A1)",
          boxShadow: "0 0 20px red",
          height: "300px",
        }}
      >
        <Col
          xs={12}
          md={4}
          style={{
            height: "",
          }}
          className="d-flex flex-row  justify-content-sm-center justify-content-md-end  align-items-center"
        >
          <Image
            src={imageURL(job[0].image)}
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "50%",
              objectFit: "",
            }}
          ></Image>
        </Col>

        <Col
          xs={12}
          md={8}
          className="d-flex flex-row justify-content-sm-center  justify-content-md-start align-items-center "
        >
          <h1
            className=" bg-secondary rounded-2 px-2   "
            style={{ boxShadow: "2px 2px 8px black" }}
          >
            {job[0].name}
          </h1>
        </Col>
      </Row>
      <Row>
        <Col sm={12} md={9} className="mt-5">
          <h1>{job[0].title}</h1>
          <h6 className="ms-3 mt-3 text-secondary mb-5">{job[0].name}</h6>
          <Card>
            <Card.Header>
              <h5>Details/Requirement</h5>
            </Card.Header>
            <Card.Body>{job[0].description}</Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={3} className="mt-5">
          <h4>Job Overview</h4>
          <Table striped bordered hover size="sm">
            <tbody>
              <tr>
                <td>Title</td>
                <td>{job[0].title}</td>
              </tr>
              <tr>
                <td>No. of posts</td>
                <td>{job[0].count}</td>
              </tr>
              <tr>
                <td>Experience</td>
                <td>{job[0].experience}</td>
              </tr>
              <tr>
                <td>Education</td>
                <td>{job[0].education}</td>
              </tr>
              <tr>
                <td>Salary</td>
                <td>{job[0].salary}</td>
              </tr>
              <tr>
                <td>Location</td>
                <td>{job[0].location}</td>
              </tr>

              <tr>
                <td>Level</td>
                <td>{job[0].level}</td>
              </tr>
              <tr>
                <td>Opening</td>
                <td>{moment(job[0].opening).fromNow()}</td>
              </tr>
              <tr>
                <td>Deadline</td>
                <td>{moment(job[0].deadline).format("MMMM D,YYYY")}</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
      <Row>
        <Col xs={12} className="my-3 d-flex flex-row justify-content-evenly">
          <Button onClick={() => navigate(-1)} size="lg" variant="danger">
            Back
          </Button>
          {user.role == "jobseeker" ? (
            <Button
              as={Link}
              className="ps-4 pe-4"
              size="lg"
              variant="success"
              onClick={() => {
                setModalShow(!modalShow);
                navigate(`${job[0].id}`);
              }}
            >
              Apply
            </Button>
          ) : null}

          <Create show={modalShow} onHide={() => setModalShow(false)} />
        </Col>
      </Row>
    </Col>
  ) : null;
};
