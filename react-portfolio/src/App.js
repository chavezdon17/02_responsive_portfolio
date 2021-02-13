import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "./App.css";
import Nav from "react-bootstrap/Nav";
import NavbarBrand from "react-bootstrap/esm/NavbarBrand";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Donovan Chavez",
      headerLinks: [
        { title: "Home", path: "/" },
        { title: "About", path: "/about" },
        { title: "Contact", path: "/contact" },
      ],
      home: {
        title: "Past Projects",
        text: " Project down below",
      },
      about: {
        title: "About Me",
      },
      contact: {
        title: "Contact Me",
      },
    };
  }

  render() {
    return (
      <Router>
        <container className="p-1" fluid={true}>
          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <NavbarBrand> Donovan Chavez</NavbarBrand>
            <NavbarToggle aria-controls="navbar-toggle" />
            <NavbarCollapse id="navbar-toggle">
              <nav className="ml-auto">
                <link className="nav-link" to="/">
                  Home
                </link>
                <link className="nav-link" to="/about">
                  About{" "}
                </link>
                <link className="nav-link" to="/contact">
                  Contact
                </link>
              </nav>
            </NavbarCollapse>
          </Navbar>
        </container>
      </Router>
    );
  }
}

export default App;
