import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import AddMovie from "../AddMovie/AddMovie";

const NavBar = ({ addMovie }) => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Best Movies</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#movies">Movies</Nav.Link>
            <Nav.Link href="#contact">Contact us</Nav.Link>
          </Nav>

          <AddMovie addMovie={addMovie} />
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
