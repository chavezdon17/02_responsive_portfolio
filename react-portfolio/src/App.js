import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "./App.css";

import Nav from "react-bootstrap/Nav";
import NavbarBrand from "react-bootstrap/esm/NavbarBrand";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import Footer from "./components/Footer";

import router from "./pages/homePage";
import homePage from "./pages/homePage";
import aboutPage from "./pages/aboutPage";
import contactPage from "./pages/contactPage";

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
        <Container className="p-1" fluid={true}>
          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <NavbarBrand> Donovan Chavez</NavbarBrand>
            <NavbarToggle aria-controls="navbar-toggle" />
            <NavbarCollapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">
                  Home
                </Link>
                <Link className="nav-link" to="/about">
                  About
                </Link>
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </Nav>
            </NavbarCollapse>
          </Navbar>
          <Router
            path="/"
            exact
            render={() => (
              <homePage
                title={this.state.home.title}
                subTitle={this.state.homePage}
              />
            )}
          />

          <Router
            path="/about"
            render={() => <aboutPage title={this.state.home.title} />}
          />

          <Router
            path="/contact"
            render={() => <contactPage title={this.state.home.title} />}
          />
          <Footer />
        </Container>
      </Router>
    );
  }
}

export default App;
