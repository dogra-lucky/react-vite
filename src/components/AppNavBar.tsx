import {Navbar, Nav, Container, Button} from "react-bootstrap";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import type {AppDispatch} from "@/app/store";
import {logoutApi} from "@/features/auth/authSlice";
import toast from "react-hot-toast";

export const AppNavbar = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutApi());
    localStorage.removeItem("token");
    toast.success("Logout successful");
    navigate("/login");
  };

  return (
    <Navbar bg="light" expand="md" className="mb-3">
      <Container>
        <Navbar.Brand as={Link} to="/">
           App
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Dashboard
            </Nav.Link>
            <Nav.Link as={Link} to="/home">
              Home
            </Nav.Link>
          </Nav>
          <Nav>
            <Button variant="outline-danger" size="sm" onClick={handleLogout}>
              Logout
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
