import { NavLink, Container, Navbar, NavDropdown, Nav } from "react-bootstrap";
export const Topnav = () => {
  return (
    <Navbar expand="lg">
      <Container fluid>
        <Navbar.Brand>JobHub</Navbar.Brand>

        <Navbar.Toggle></Navbar.Toggle>
        <Navbar.Collapse>
          <Nav className="ms-auto me-5">
            <NavLink href="#">About Us</NavLink>
            <NavDropdown title="Search">
              <NavDropdown.Item>Top Jobs</NavDropdown.Item>
              <NavDropdown.Item>Hot Jobs</NavDropdown.Item>
              <NavDropdown.Item>Premium Jobs</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
