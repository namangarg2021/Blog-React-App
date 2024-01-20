import React, { useContext, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { selectBlogById, deleteBlog } from "../store/blogSlice";
import { Button, Col, Container, Modal, Row } from "react-bootstrap";
import { LikesContext } from "../contexts/likeContext";
import { AiOutlineLike, AiFillLike, AiFillEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
const BlogDetails = () => {
  const { id } = useParams();
  const { likes, toggleLike } = useContext(LikesContext);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const blog = useSelector((state) => selectBlogById(state, id));

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleLikeClick = () => {
    toggleLike(id);
  };

  const handleEdit = () => {
    navigate(`/edit-blog/${id}`);
  };
  const handleDelete = () => {
    dispatch(deleteBlog(id));
    navigate("/");
  };
  let likesArr = JSON.parse(localStorage.getItem("likes")) || [];
  const likeObj = likesArr.find((likeObj) => likeObj.id === id);
  let imageStyle = {
    backgroundImage:
      'url("https://p4.wallpaperbetter.com/wallpaper/696/129/80/pattern-textured-texture-artwork-wallpaper-preview.jpg")',
    width: "80%",
    color: "white",
  };
  return blog ? (
    <div className="BlogDetails">
      <Modal show={show} onHide={handleClose}>
        <Modal.Body closeButton>
          <Modal.Title>Are you sure you want to delete this blog?</Modal.Title>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
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
      <Container fluid style={imageStyle} className="shadow p-4 rounded">
        <Row>
          <Col md={{ span: 10, offset: 5 }}>
            <span style={{ fontSize: "20px" }} className="text-primary bolder">
              Published on :{" "}
            </span>
            <span style={{ fontSize: "16px" }}>{blog.date}</span>
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 1, offset: 1 }}>
            <Button onClick={handleLikeClick}>
              {likes[id] ? (
                <>
                  <AiFillLike />
                </>
              ) : (
                <>
                  <AiOutlineLike />
                </>
              )}
              &nbsp;
              {likeObj.count}
            </Button>
          </Col>
          <Col md={{ span: 1 }}>
            <Button className="text-dark bg-warning" onClick={handleEdit}>
              <AiFillEdit />
            </Button>
          </Col>
          <Col md={{ span: 1 }}>
            <Button className="text-light bg-danger" onClick={handleShow}>
              <MdDelete />
            </Button>
          </Col>
        </Row>
        <br />

        <Row>
          <Col md={4} style={{ textAlign: "inherit" }}>
            <h5>Title</h5>
          </Col>
          <Col
            md={5}
            style={{
              textAlign: "justify",
              textJustify: "inter-word",
              fontSize: "20px",
            }}
          >
            {blog.title}
          </Col>
        </Row>
        <br />
        <Row>
          <Col md={4} style={{ textAlign: "inherit" }}>
            <h5>Categories</h5>
          </Col>
          <Col
            md={5}
            style={{
              textAlign: "justify",
              textJustify: "inter-word",
              fontSize: "20px",
            }}
          >
            {blog.category}
          </Col>
        </Row>
        <br />
        <Row>
          <Col md={4} style={{ textAlign: "inherit" }}>
            <h5>Content</h5>
          </Col>
          <Col
            md={8}
            style={{
              textAlign: "justify",
              textJustify: "inter-word",
              fontSize: "20px",
            }}
          >
            {blog.description}
          </Col>
        </Row>
        <br />
      </Container>
    </div>
  ) : (
    <h1>This blog has been deleted!!!</h1>
  );
};

export default BlogDetails;
