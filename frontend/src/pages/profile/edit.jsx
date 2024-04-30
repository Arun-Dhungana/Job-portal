import { useEffect, useState } from "react";
import { Row, Col, Form, Image } from "react-bootstrap";
import { SubmitBtn, FormField } from "../../components/index";
import React from "react";
import { setInForm } from "../../lib";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import http from "../../http";
import { toast } from "react-toastify";
export const EditProfile = () => {
  const user = useSelector((state) => state.user.value);

  const [img, setImage] = useState(user.image);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({});
  const params = useParams();
  useEffect(() => {
    if (Object.keys(user).length) {
      setForm({
        name: user.name,
        number: user.number,
        description: user.description,
        image: user.image,
      });
    }
  }, []);

  useEffect(() => {
    if (Object.keys(form).includes("images")) {
      setImage(URL.createObjectURL(form.images));
    }
  }, [form.images]);

  const handleSubmit = (ev) => {
    ev.preventDefault();
    setLoading(true);

    const fd = new FormData();
    for (let i in form) {
      fd.append(i, form[i]);
    }
    console.log(fd);
    http
      .put(`/profile/update/${params.id}`, fd, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then(() => setLoading(false))
      .catch((err) => console.log(err))
      .finally(() => navigate("/"));
  };

  return Object.keys(form).length ? (
    <Row>
      <Col xs={12} className="">
        <Row>
          <Form onSubmit={handleSubmit}>
            <Col
              xs={12}
              md={12}
              className="d-flex flex-row justify-content-center mb-3"
            >
              <div
                className=""
                style={{
                  position: "relative",
                  width: "125px",
                  height: "125px",
                }}
              >
                <Image
                  src={img}
                  style={{
                    width: "120px",
                    height: "120px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    display: "inline-flex",
                    boxShadow: "2px 2px 8px black",
                    margin: "5px",
                  }}
                  className=""
                ></Image>
                <label htmlFor="file">
                  <i
                    className="fa-solid fa-camera-rotate"
                    style={{
                      position: "absolute",
                      right: "20px",
                      top: "5px",
                      zIndex: "1",
                      fontSize: "25px",
                      color: "white",
                      cursor: "pointer",
                    }}
                  ></i>
                </label>
                <input
                  id="file"
                  type="file"
                  className="d-none"
                  name="images"
                  onChange={(ev) => {
                    setForm({
                      name: user.name,
                      number: user.number,
                      description: user.description,
                      images: ev.target.files[0],
                    });
                    console.log(form);
                  }}
                  accept="image/*"
                ></input>
              </div>
            </Col>

            <Col xs={12} md={8} className="text-center mx-auto">
              <FormField label="Name" title="name" className="">
                <Form.Control
                  id="name"
                  type="text"
                  name="name"
                  defaultValue={form.name}
                  onChange={(ev) => setInForm(ev, form, setForm)}
                  className="border border-dark "
                  style={{}}
                  required
                ></Form.Control>
              </FormField>
              <FormField label="Number" title="number">
                <Form.Control
                  id="number"
                  type="number"
                  name="number"
                  defaultValue={form.number}
                  onChange={(ev) => setInForm(ev, form, setForm)}
                  className="border border-dark "
                  style={{}}
                  required
                ></Form.Control>
              </FormField>
              <FormField label="Description" title="description">
                <Form.Control
                  id="description"
                  type="text"
                  as="textarea"
                  name="description"
                  defaultValue={form.description}
                  onChange={(ev) => setInForm(ev, form, setForm)}
                  className="border border-dark "
                  style={{}}
                  required
                ></Form.Control>
              </FormField>
            </Col>

            <SubmitBtn
              title="Update"
              icon="fa-wrench"
              variant1="danger"
              variant2="success"
              loading={loading}
            ></SubmitBtn>
          </Form>
        </Row>
      </Col>
    </Row>
  ) : null;
};
