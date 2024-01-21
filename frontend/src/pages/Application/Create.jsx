import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

export const Create = ({ show, onHide }) => {
  const handleSubmit = (ev) => {};

  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>Apply</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form onSubmit={handleSubmit} data-bs-theme="dark">
          <label htmlFor="resume">Resume</label>
          <Form.Control id="resume" name="resume" type="file"></Form.Control>
          <hr></hr>
          <div
            className="d-flex flex-row justify-content-end "
            style={{ display: "block - inline " }}
          >
            <Button
              variant="danger"
              size="sm"
              className="mb-2 me-2"
              onClick={onHide}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant="success"
              size="sm"
              className="mb-2"
              onClick={onHide}
            >
              Apply
              <i className={` fa-solid fa-save  px-3`}></i>
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};
