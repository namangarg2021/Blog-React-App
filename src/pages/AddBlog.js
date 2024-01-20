import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { addBlog } from "../store/blogSlice";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import React, { useState } from "react";
import { Container } from "react-bootstrap";

const AddPage = () => {
  const [validated, setValidated] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate("/");

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    event.preventDefault();
    setValidated(true);

    if (form.checkValidity() === true) {
      const id = uuid();
      const title = event.target.title.value;
      const category = event.target.category.value;
      const description = event.target.description.value;
      dispatch(addBlog({ id, title, category, description }));
      navigate("/");
    }
  };

  return (
    <div>
      <Container fluid>
        <Row>
          <Col md={{ span: 1, offset: 11 }}>
            <Button
              type="button"
              bg="light"
              variant="secondary"
              onClick={() => navigate("/")}
            >
              BACK
            </Button>
          </Col>
        </Row>
      </Container>
      <br />
      <Container fluid className="AddBlog">
        <Row>
          <Col>
            <h2>Add a Blog</h2>
          </Col>
        </Row>
        <br />
        <div>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group controlId="title">
              <Row>
                <Col md={{ span: 2, offset: 2 }}>
                  <h4>Title</h4>
                </Col>
                <Col md={6}>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Enter Title"
                  />
                </Col>
              </Row>
            </Form.Group>
            <br />
            <Form.Group controlId="category">
              <Row>
                <Col md={{ span: 2, offset: 2 }}>
                  <h4>Categories</h4>
                </Col>
                <Col md={6}>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Enter categories"
                    autoComplete="off"
                  />
                </Col>
              </Row>
            </Form.Group>
            <br />
            <Form.Group controlId="description">
              <Row>
                <Col md={{ span: 2, offset: 2 }}>
                  <h4>Content</h4>
                </Col>
                <Col md={6}>
                  <Form.Control
                    as="textarea"
                    rows={6}
                    type="text"
                    placeholder="Enter Content"
                    required
                  />
                </Col>
              </Row>
            </Form.Group>
            <br />
            <Row>
              <Col md={{ span: 1, offset: 6 }}>
                <Button type="submit">Add</Button>
              </Col>
            </Row>
          </Form>
        </div>
      </Container>
    </div>
  );
};

export default AddPage;
