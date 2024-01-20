import React from "react";
import { Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Container fluid style={{ width: "100%" }}>
        <Row>
          <Navbar bg="dark" variant="light">
            <Col md={2}>
              <Navbar.Brand>
                <Link
                  to="/"
                  style={{
                    textDecoration: "none",
                    color: "whitesmoke",
                    fontSize: "22px",
                  }}
                >
                  Home
                </Link>
              </Navbar.Brand>
            </Col>
            <Col md={8}>
              <Navbar.Text
                style={{
                  textDecoration: "none",
                  color: "whitesmoke",
                }}
              >
                <h1>Welcome to Blogging Website</h1>
              </Navbar.Text>
            </Col>
          </Navbar>
        </Row>
      </Container>
      <br />
    </>
  );
};

export default Header;
