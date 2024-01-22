import { Button } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
export const SubmitBtn = ({ icon, title, variant1, variant2 }) => {
  return (
    <Row>
      <Col className="d-flex flex-row justify-content-around">
        <Button type="button" variant={variant1} className=" p-1 px-3 mb-2">
          Cancel
        </Button>
        <Button type="submit" variant={variant2} size="sm" className="mb-2">
          {title}
          <i className={` fa-solid ${icon}  px-3`}></i>
        </Button>
      </Col>
    </Row>
  );
};
