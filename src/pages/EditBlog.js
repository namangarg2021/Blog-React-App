import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { selectBlogById, updateBlog } from "../store/blogSlice";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import { Container } from "react-bootstrap";

const EditBlog = () => {
  const { id } = useParams();
  const blog = useSelector((state) => selectBlogById(state, id));
  const [validated, setValidated] = useState(false);
  const [title, setTitle] = useState(String(blog.title));
  const [category, setCategory] = useState(blog.category);
  const [description, setDescription] = useState(blog.description);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    event.preventDefault();
    setValidated(true);

    if (form.checkValidity()) {
      dispatch(updateBlog({ id, title, category, description }));
      navigate(`/blog-details/${id}`);
    }
  };

  return (
    <div>
      <div>
        <Container fluid>
          <Row>
            <Col md={{ span: 1, offset: 11 }}>
              <Button
                type="button"
                bg="light"
                variant="secondary"
                onClick={() => navigate(`/blog-details/${id}`)}
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
              <h2>Edit Blog</h2>
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
                      onChange={(e) => setTitle(e.target.value)}
                      defaultValue={title}
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
                      defaultValue={category}
                      placeholder="Enter category"
                      onChange={(e) => setCategory(e.target.value)}
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
                      placeholder="Describe about your experience..."
                      defaultValue={description}
                      onChange={(e) => setDescription(e.target.value)}
                      required
                    />
                  </Col>
                </Row>
              </Form.Group>
              <br />
              <Row>
                <Col md={{ span: 1, offset: 6 }}>
                  <Button type="submit">Submit</Button>
                </Col>
              </Row>
            </Form>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default EditBlog;
