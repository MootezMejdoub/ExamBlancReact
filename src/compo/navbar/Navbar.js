import React, { useContext, useEffect } from "react";
import { Navbar, Nav, Container, Button, Dropdown } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import "./navbar.css";

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg" className="navbar">
      {/* <Navbar.Brand href="#">Your Brand</Navbar.Brand> */}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavLink to="/home" className="nav-link">
            home
          </NavLink>{" "}
          <NavLink className="nav-link" to="/add">
            ADD
          </NavLink>
          <NavLink className="nav-link" to="#">
            Contact
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
