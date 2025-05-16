import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BlogCard from "./BlogCard";

const MyBlogs = () => {
  const recentBlog = {
    title: "Image Upload Using Cloudinary + Multer in React.js & Node.js",
    description:
      "In this post, I’ll walk you through a simple and practical way to upload images from a React frontend to Cloudinary, using Multer in a Node.js + Express backend.",
    link: "https://dev.to/ishworj/image-upload-using-cloudinary-multer-in-reactjs-nodejs-35dc",
    date: "May 9, 2025",
  };

  const allBlogs = [
    {
      title: "10 Smart Ways to Use Google Maps APIs in Your Projects",
      description: "Smart Ways to Use Google Maps APIs in Your Projects",
      link: "https://dev.to/ishworj/10-smart-ways-to-use-google-maps-apis-in-your-projects-2jej",
      date: "May 3, 2025",
    },
    {
      title: "Your Website Looks Good, But Is It Actually Good?",
      description:
        "A practical guide to website quality beyond visual appeal—covering performance, accessibility, SEO, and more.",
      link: "https://dev.to/ishworj/your-website-looks-good-but-is-it-actually-good-3gl3",
      date: "April 20, 2025",
    },
    {
      title: "How to Build Strong and Secure APIs",
      description: "A practical guide to building robust REST APIs ",
      link: "https://dev.to/ishworj/how-to-build-strong-and-secure-apis-4g57",
      date: "April 15, 2025",
    },
    {
      title: "Designing Intuitive and Responsive Interfaces",
      description:
        "A well-designed user interface (UI) doesn’t just look good—it feels good to interact with.",
      link: "https://dev.to/ishworj/designing-intuitive-and-responsive-interfaces-with-reactjs-and-bootstrap-everything-you-need-to-41ak",
      date: "March 10, 2025",
    },
    {
      title: "SQL(MYSQL) or NoSQL(MongoDB)",
      description:
        "When choosing a database for your project, the two main options are MongoDB (NoSQL) and .",
      link: "https://dev.to/ishworj/sqlmysql-or-nosqlmongodb-1j7h",
      date: "February 28, 2025",
    },
    {
      title: "Redux (A global state management)",
      description: "Understanding Redux: What, Why, and How to Set It Up",
      link: "https://dev.to/ishworj/redux-a-global-state-management-2i4g",
      date: "January 25, 2025",
    },
    ,
  ];

  return (
    <div
      style={{
        color: "#a8ff60",
        minHeight: "100vh",
      }}
      className="pt-2 pt-sm-5"
    >
      <h1 className="text-center mb-4">🛠️ Recent Blog</h1>
      <Row className="justify-content-center mb-5">
        <Col md={8}>
          <BlogCard {...recentBlog} />
        </Col>
      </Row>

      <h2 className="text-center mb-4">📚 All Blogs</h2>
      <Row className="justify-content-center">
        {allBlogs.map((blog, index) => (
          <Col md={6} lg={4} key={index} className="mb-4">
            <BlogCard {...blog} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default MyBlogs;
