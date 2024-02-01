import {
  Container,
  Navbar,
  NavDropdown,
  Nav,
  Row,
  Col,
  NavItem,
  Dropdown,
} from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fromStorage, removeStorage, imageURL } from "../lib";
import { setUser, clearUser } from "../store";
import "./layout.css";
import { Outlet, useNavigate } from "react-router-dom";
import http from "../http";
export const Topnav = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => {
    return state.user.value;
  });

  const token = fromStorage("token");

  useEffect(() => {
    if (token) {
      http
        .get("/profile/detail")
        .then(({ data }) => {
          dispatch(setUser(data));
        })
        .catch((err) => console.log(err));
    }
  }, []);

  const handleLogout = () => {
    dispatch(clearUser());
    removeStorage("token");

    navigate("/");
  };
  return (
    <Container fluid>
      <Row className="min-vh-100 ">
        {/*Navbar*/}
        <Col xs={12} className="m-0 p-0">
          <Navbar expand="lg" className=" bg-dark ps-2 " variant="dark">
            <Container>
              <Navbar.Brand as={Link} to="/" className="text-white text-2xl ">
                JobHub
              </Navbar.Brand>

              <Navbar.Toggle
                aria-controls="responsive-navbar-nav"
                className="ms-auto"
              ></Navbar.Toggle>
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mx-auto ">
                  <NavLink
                    to="/about"
                    className="text-white text-decoration-none d-flex flex-row  align-items-center"
                  >
                    About Us
                  </NavLink>

                  <NavDropdown
                    title={<span className="text-white">Search</span>}
                    id="basic-navbar-dropdown"
                    data-bs-theme="dark"
                    className="dropdown"
                  >
                    <NavDropdown.Item as={Link} to="/top">
                      Top Jobs
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/hot">
                      Hot Jobs
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/premium">
                      Premium Jobs
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                {Object.keys(user).length ? (
                  user.role == "company" ? (
                    <Nav className="">
                      <NavLink
                        to="/job/manage"
                        className="text-white text-decoration-none p-1"
                      >
                        Manage Jobs
                      </NavLink>
                    </Nav>
                  ) : user.role == "jobseeker" ? (
                    <Nav>
                      <NavLink
                        to="/application/applied"
                        className="text-white text-decoration-none p-1"
                      >
                        Applied Jobs
                      </NavLink>
                    </Nav>
                  ) : null
                ) : (
                  <Nav className="ms-auto">
                    <NavDropdown
                      title={
                        <span className="text-white">
                          <i className="fa-solid fa-plug-circle-exclamation"></i>
                          Register
                        </span>
                      }
                      id="basic-navbar-dropdown"
                      data-bs-theme="dark"
                    >
                      <NavDropdown.Item as={NavLink} to="/register/seeker">
                        as Job-Seeker
                        <i class="fa-solid fa-user-large ps-1"></i>
                      </NavDropdown.Item>
                      <NavDropdown.Divider></NavDropdown.Divider>
                      <NavDropdown.Item as={NavLink} to="/register/company">
                        as Company
                        <i className="fa-solid fa-building-user ps-1"></i>
                      </NavDropdown.Item>
                    </NavDropdown>
                    <NavLink
                      to="/login"
                      className="text-white text-decoration-none d-flex flex-row align-items-center pe-2"
                    >
                      <i className="fa-solid fa-plug-circle-bolt"></i>
                      Login
                    </NavLink>
                  </Nav>
                )}

                {Object.keys(user).length ? (
                  <Nav>
                    <NavDropdown
                      className="ps-2"
                      title={
                        <img
                          src={imageURL(user.image)}
                          alt="profile picture"
                          style={{
                            height: "40px",
                            width: "40px",

                            borderRadius: "50%",
                          }}
                        ></img>
                      }
                      data-bs-theme="dark"
                      align={{ xs: "start" }}
                    >
                      <NavDropdown.Item as={NavLink} to="/profile/123">
                        Profile
                      </NavDropdown.Item>

                      <NavDropdown.Item as={NavLink} to="/profile/password">
                        Change Password
                      </NavDropdown.Item>
                      <NavDropdown.Item as={NavLink} to="/profile/edit">
                        Edit Profile
                      </NavDropdown.Item>
                      <NavDropdown.Divider></NavDropdown.Divider>
                      <NavDropdown.Item onClick={handleLogout}>
                        Logout
                      </NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                ) : null}
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Col>
        {/*Content*/}
        <Outlet></Outlet>
        {/*footer*/}

        <Col className="bg-dark text-white pt-2 pb-2 align-self-end">
          <footer variant="dark">
            <Row>
              <Col xs={12} md={4} className="text-center pb-3">
                <Row>
                  <Col xs={12}>
                    <img src="" alt=""></img>

                    <a
                      href="/"
                      style={{ textDecoration: "none", fontSize: "20px" }}
                      className="text-white mt-0 d-flex flex-row justify-content-center align-item-center "
                    >
                      JobHub
                    </a>
                  </Col>
                </Row>
              </Col>
              <hr className="d-xs-block d-md-none"></hr>
              <Col xs={12} md={4} className="text-center">
                <Row>
                  <Col xs={12} className="pb-1 " style={{ fontSize: "20px" }}>
                    Links
                  </Col>
                  <hr></hr>
                  <Col xs={12} className="p-0">
                    <ul
                      style={{
                        listStyle: "none",
                      }}
                    >
                      <li>
                        <a
                          href="/"
                          className="text-white"
                          style={{ textDecoration: "none" }}
                        >
                          Home
                        </a>
                      </li>
                      <li>
                        <a
                          href="/"
                          className="text-white "
                          style={{ textDecoration: "none" }}
                        >
                          Contact Us
                        </a>
                      </li>
                      <li>
                        <a
                          href="/"
                          className="text-white"
                          style={{ textDecoration: "none" }}
                        >
                          About Us
                        </a>
                      </li>
                      <li>
                        <a
                          href="/"
                          className="text-white"
                          style={{ textDecoration: "none" }}
                        >
                          Terms and Conditions
                        </a>
                      </li>
                    </ul>
                  </Col>
                </Row>
              </Col>
              <hr className="d-xs-block d-md-none"></hr>
              <Col xs={12} md={4} className="text-center text-sm-center ">
                <Row>
                  <Col xs={12} className="pb-1" style={{ fontSize: "20px" }}>
                    Contact Us
                  </Col>
                  <hr></hr>
                  <Col xs={12} className="p-0 m-0">
                    <i className="fa-solid fa-map-pin pe-1"></i>

                    <address className="d-inline">Gurjudhara,Kathmandu</address>
                    <br></br>
                    <i className="fa-solid fa-phone-volume pe-1"></i>
                    <p className="d-inline">9860857951</p>
                    <br></br>
                    <i className="fa-solid fa-at"></i>
                    <p className="d-inline">demo@gmail.com</p>
                    <br></br>
                    <a href="" className="">
                      <i className="fa-brands fa-facebook pe-2"></i>
                    </a>
                    <a href="" className="">
                      <i className="fa-brands fa-square-instagram pe-2"></i>
                    </a>
                    <a href="" className="">
                      <i className="fa-brands fa-twitter pe-2"></i>
                    </a>
                  </Col>
                </Row>
              </Col>
              <Row>
                <Col
                  xs={12}
                  className="bg-dark  text-center "
                  style={{ color: "grey", fontSize: "14px" }}
                >
                  <p className="p-0 m-0">
                    &copy; 2000 - 2024 JobHUb Pvt. Ltd. All Right Reserved.
                  </p>
                </Col>
              </Row>
            </Row>
          </footer>
        </Col>
      </Row>
    </Container>
  );
};
