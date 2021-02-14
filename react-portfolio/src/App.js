import React from "react";
import { BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "./App.css";
import Nav from "react-bootstrap/Nav";

import NavbarBrand from "react-bootstrap/esm/NavbarBrand";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";

import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

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
        subTitle: "Project's down below",
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
          <Switch>
          <Route 
            path="/"
            exact
            render={() => (
              <HomePage
                title={this.state.home.title}
                subTitle={this.state.home.subTitle}
              />
            )}
          />

          <Route
            path="/about"
            render={() => <AboutPage title={this.state.about.title} />}
          />

          <Route
            path="/contact"
            render={() => <ContactPage title={this.state.contact.title} />}
          />
          </Switch>
          <Footer />
        </Container>

      </Router>
    );
  }
}

export default App;
