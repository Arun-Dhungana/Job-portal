import {
  NavLink,
  Container,
  Navbar,
  NavDropdown,
  Nav,
  NavItem,
} from "react-bootstrap";
export const Topnav = () => {
  return (
    <Navbar expand="lg" size="lg">
      <Container fluid>
        <Navbar.Brand>JobHub</Navbar.Brand>

        <Navbar.Toggle></Navbar.Toggle>
        <Navbar.Collapse>
          <Nav className="ms-auto me-3 ">
            <NavLink href="#">About Us</NavLink>
            <NavDropdown title="Search">
              <NavDropdown.Item>Top Jobs</NavDropdown.Item>
              <NavDropdown.Item>Hot Jobs</NavDropdown.Item>
              <NavDropdown.Item>Premium Jobs</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className="ms-auto ">
            <NavLink href="/register">
              <i className="fa-solid fa-plug-circle-exclamation"></i>
              Regsiter
            </NavLink>
            <NavLink href="/login">
              <i className="fa-solid fa-plug-circle-bolt"></i>
              Login
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
