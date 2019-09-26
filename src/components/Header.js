import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import history from "./history";

export class Header extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark" collapseOnSelect expand="sm">
        <Navbar.Brand className="mr-auto">Herolo Weather Task</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Nav variant="pills">
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav.Item>
              <Nav.Link eventKey="link-1" onClick={() => history.push("/")}>
                HomePage
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-2" onClick={() => history.push("/fav")}>
                Favorites
              </Nav.Link>
            </Nav.Item>
          </Navbar.Collapse>
        </Nav>
      </Navbar>
    );
  }
}

export default Header;
