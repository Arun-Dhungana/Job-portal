import { Container, Navbar, NavDropdown, Nav, Row, Col } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeStorage, imageURL } from "../lib";
import { clearUser } from "../store";
import "./layout.css";
import { Outlet, useNavigate } from "react-router-dom";
export const Topnav = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => {
    console.log(state.user.value);
    return state.user.value;
  });

  const handleLogout = async () => {
    await removeStorage('token')
      .then(dispatch(clearUser()))
      .catch((err) => console.log(err));
  };
  return (
    <Container fluid>
      <Row className="min-vh-100">
        {/*Navbar*/}
        <Col xs={12}>
          <Row>
            <Col className="px-0">
              <Navbar expand="lg" className=" bg-dark ps-2 " variant="dark">
                <Navbar.Brand as={Link} to="/" className="text-white text-2xl ">
                  JobHub
                </Navbar.Brand>

                <Navbar.Toggle></Navbar.Toggle>
                <Navbar.Collapse>
                  <Nav className="mx-auto  ">
                    <Nav.Item>
                      <NavLink
                        to="/about"
                        className="text-white text-decoration-none d-flex flex-row align-items-center"
                      >
                        About Us
                      </NavLink>
                    </Nav.Item>

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
                      <Nav className="ms-auto">
                        <Nav.Item>Manage Jobs</Nav.Item>
                      </Nav>
                    ) : user.role == "jobseeker" ? (
                      <Nav>
                        <Nav.Item> Applied Jobs</Nav.Item>
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
                        data-bs-theme="dark"
                      >
                        <NavDropdown.Item as={NavLink} to="/register/seeker">
                          as Job-Seeker
                          <i class="fa-solid fa-user-large ps-1"></i>
                        </NavDropdown.Item>
                        <NavDropdown.Divider></NavDropdown.Divider>
                        <NavDropdown.Item href="/register/company">
                          as Company
                          <i className="fa-solid fa-building-user ps-1"></i>
                        </NavDropdown.Item>
                      </NavDropdown>
                      <Nav.Item as={NavLink} to="/login" className="text-white">
                        <i className="fa-solid fa-plug-circle-bolt"></i>
                        Login
                      </Nav.Item>
                    </Nav>
                  )}
                </Navbar.Collapse>
                {Object.keys(user).length ? (
                  <Nav className="ms-auto  ">
                    <NavDropdown
                      title={
                        <img
                          className="h-100 w-100"
                          style={{}}
                          src={imageURL(user.image)}
                          alt="profile picture"
                        ></img>
                      }
                    >
                      <NavDropdown.Item href="/profile">
                        Profile
                      </NavDropdown.Item>

                      <NavDropdown.Item href="/profile">
                        Change Password
                      </NavDropdown.Item>
                      <NavDropdown.Item href="/profile">
                        Edit Profile
                      </NavDropdown.Item>
                      <NavDropdown.Divider></NavDropdown.Divider>
                      <NavDropdown.Item
                        onClick={() => {
                          handleLogout;
                        }}
                      >
                        Logout
                      </NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                ) : null}
              </Navbar>
            </Col>
          </Row>
        </Col>
        {/*Content*/}
        <Outlet></Outlet>
        {/*footer*/}

        <Col className="bg-dark text-white pt-2 pb-2">
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
