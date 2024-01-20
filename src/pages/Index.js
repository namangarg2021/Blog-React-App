import React from "react";
import { Link } from "react-router-dom";
import { Button, Col, Container, Row } from "react-bootstrap";
import { MdOutlineCreateNewFolder } from "react-icons/md";

const Home = () => {
  const blogs = JSON.parse(localStorage.getItem("blogs"));

  return (
    <div>
      <Container>
        <Row>
          <Col md={{ span: 2, offset: 10 }}>
            <Button type="button" bg="dark" className="bg-dark">
              <Link
                to="/add-blog"
                style={{ textDecoration: "none", color: "white" }}
              >
                <MdOutlineCreateNewFolder />
                &nbsp; Create A Blog
              </Link>
            </Button>
          </Col>
        </Row>
      </Container>

      <Container fluid>
        <Row className="text-dark">
          <Col>
            <h2>Publish your passions, your way</h2>
          </Col>
        </Row>
        <Row className="text-dark">
          <Col>Create a unique and beautiful blog easily.</Col>
        </Row>
        <br />
        {blogs &&
          blogs.map((blog, index) => (
            <Row
              key={blog.id}
              className="table-warning"
              style={{
                textAlign: "justify",
                whiteSpace: "nowrap",
              }}
            >
              <Col
                md={{ span: 3, offset: 5 }}
                style={{ background: "white" }}
                className="p-3 m-2 w-50 mx-auto text-center shadow rounded-4 border border-success"
              >
                <Link
                  to={`/blog-details/${blog.id}`}
                  style={{
                    textDecoration: "none",
                    text: "dark",
                    fontSize: "18px",
                  }}
                >
                  {blog.title}
                </Link>
              </Col>
            </Row>
          ))}
      </Container>

      {/* <Container>
        <h1>All Blogs</h1>
        <br /> */}
      {/* <Table table table-striped table-hover style={styles.tableStyle}>
          <thead>
            <tr className="table-info">
              <th>Title of the Blog</th>
            </tr>
          </thead>
          <tbody>
            {blogs &&
              blogs.map((blog, index) => (
                <tr
                  key={blog.id}
                  className="table-warning"
                  style={{
                    textAlign: "justify",
                    whiteSpace: "nowrap",
                  }}
                >
                  <td>
                    <Link
                      to={`/blog-details/${blog.id}`}
                      style={{
                        textDecoration: "none",
                      }}
                    >
                      {blog.title}
                    </Link>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table> */}
      {/* </Container> */}
    </div>
  );
};

export default Home;
