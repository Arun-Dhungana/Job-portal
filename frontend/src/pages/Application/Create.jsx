import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import http from "../../http";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
export const Create = ({ show, onHide }) => {
  const [form, setForm] = useState({});
  const [loading, setLoading] = useState(false);
  const params = useParams();
  const navigate = useNavigate();
  const handleSubmit = (ev) => {
    ev.preventDefault();
    setLoading(true);
    const data = new FormData();
    data.append("resume", form.resume);

    http
      .post(`/cms/apply/${params.id}`, data, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then(() => setLoading(false))
      .catch((err) => console.log(err))
      .finally(() => {
        navigate("/");
      });
  };

  return (
    <Modal show={show} onHide={onHide} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Apply</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form onSubmit={handleSubmit} data-bs-theme="dark">
          <label htmlFor="resume">Resume</label>
          <Form.Control
            id="resume"
            name="resume"
            type="file"
            onChange={(ev) => setForm({ resume: ev.target.files[0] })}
            accept="application/pdf"
            required
          ></Form.Control>
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
            <Button type="submit" variant="success" size="sm" className="mb-2">
              Apply
              <i
                className={` fa-solid ${
                  loading ? "fa-spinner fa-spin" : "fa-save"
                }  px-3`}
              ></i>
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};
