import React from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";

function Content(props) {
  return (
    <Container fluid={true}>
      <Row className="justify-content-center">
        <Col md={8}>{props.children}</Col>
      </Row>
    </Container>
  );
}

export default Content;
