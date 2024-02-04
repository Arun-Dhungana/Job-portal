import { useEffect, useState } from "react";
import {
  Button,
  Col,
  Row,
  Table,
  Image,
  Card,
  Container,
} from "react-bootstrap";

import { useNavigate, useParams } from "react-router-dom";
import http from "../../http";
import { imageURL } from "../../lib";
import { Loading } from "../../components/Loading";
export const Show = () => {
  const params = useParams();
  const [dats, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    http
      .get(`/cms/company/${params.id}`)

      .then(({ data }) => setData(data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <Container>
      {loading ? (
        <Loading></Loading>
      ) : dats.length ? (
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
                src={imageURL(dats[0].image)}
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
              className="d-flex flex-row justify-content-sm-center  justify-content-md-start align-items-md-center align-items-sm-start  "
              style={{}}
            >
              <span
                className="p-1"
                style={{
                  boxShadow: " 0 0 10px black",
                  borderRadius: "0 10px 0 10px",
                  textWrap: "none",
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                  fontSize: "17px",
                  background: "grey",
                  height: "40px",
                  fontWeight: "bolder",
                }}
              >
                {dats[0].name}
              </span>
            </Col>
          </Row>
          <Row>
            <Col sm={12} md={9} className="mt-5">
              <h1 className="mb-5">Detail</h1>
              <i className="fa-solid fa-at pe-2"></i>
              <h5 className="d-inline">{dats[0].Email}</h5>
              <br></br>
              <i className="fa-solid fa-phone-volume pe-2"></i>
              <h5 className="d-inline">{dats[0].number}</h5>
              <Card className="mt-5">
                <Card.Header>
                  <h5>Description</h5>
                </Card.Header>
                <Card.Body>{dats[0].description}</Card.Body>
              </Card>
            </Col>
            <Col sm={12} md={3} className="mt-5">
              <h4 className="text-center">Contact Person's Detail</h4>
              <Table striped bordered hover size="sm">
                <tbody>
                  <tr>
                    <td>Name</td>
                    <td>{dats[0].contact_person}</td>
                  </tr>
                  <tr>
                    <td>Number</td>
                    <td>{dats[0].contact_no}</td>
                  </tr>
                  <tr>
                    <td>Email</td>
                    <td>{dats[0].email}</td>
                  </tr>
                  <tr>
                    <td>Address</td>
                    <td>{dats[0].address}</td>
                  </tr>
                  <tr>
                    <td>Description</td>
                    <td>{dats[0].description}</td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
          <Row>
            <Col xs={12} className="my-3 ">
              <Button
                onClick={() => navigate(-1)}
                className="ps-4 pe-4"
                variant="primary"
              >
                Back
              </Button>
            </Col>
          </Row>
        </Col>
      ) : null}
    </Container>
  );
};
