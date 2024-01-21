import { Button } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
export const SubmitBtn = ({ icon, title }) => {
  return (
    <Row>
      <Col className="d-flex flex-row justify-content-around">
        <Button
          type="button"
          className="bg-dark border border-none p-1 px-3 mb-2"
        >
          Cancel
        </Button>
        <Button type="submit" variant="dark" size="sm" className="mb-2">
          {title}
          <i className={` fa-solid ${icon}  px-3`}></i>
        </Button>
      </Col>
    </Row>
  );
};
