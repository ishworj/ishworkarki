import React, { useState } from "react";
import { FaArrowRight, FaDev } from "react-icons/fa";
import { Card, Button, Tooltip, OverlayTrigger } from "react-bootstrap";

const BlogCard = ({ title, description, date, link }) => {
  const [hovered, setHovered] = useState(false);

  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      onClick={() => openInNewTab(link)}
      style={{ textDecoration: "none", cursor: "pointer" }}
    >
      <Card
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          backgroundColor: "#1e1e1e",
          border: "1px solid",
          transform: hovered ? "scale(1.015)" : "scale(1)",
          transition: "transform 0.25s ease-in-out, box-shadow 0.25s",
          boxShadow: hovered ? "0 4px 12px rgba(46, 204, 113, 0.3)" : "none",
          height: window.innerWidth < 550 ? "fit-content" : "150px",
          overflow: "hidden",
        }}
        className="mb-2 text-white cursor-pointer mx-4 mx-sm-0"
      >
        <Card.Body>
          <div
            className="d-flex flex-column justify-content-between"
            style={{ height: "100%" }}
          >
            {/* Date and Icon at the top */}
            <div
              className="d-flex align-items-center mb-2"
              style={{ fontSize: "0.8rem" }}
            >
              <OverlayTrigger
                placement="top"
                show={hovered}
                overlay={<Tooltip id="tooltip">Read on Dev</Tooltip>}
              >
                <span>
                  <FaDev
                    size={18}
                    style={{ color: "#2ecc71", marginRight: "5px" }}
                  />
                </span>
              </OverlayTrigger>
              <span>Published on {date}</span>
            </div>

            {/* Title and Description */}
            <div>
              <Card.Title style={{ fontSize: "1.25rem", marginBottom: "0" }}>
                {title}
              </Card.Title>
              <Card.Text style={{ marginBottom: "0.4rem" }}>
                {description}
              </Card.Text>
            </div>

            {/* "Read on Dev" button for mobile devices */}
            <div
              className="d-block d-sm-none mt-3"
              onClick={(e) => {
                e.stopPropagation(); // prevent parent click
                openInNewTab(link);
              }}
            >
              <Button variant="success">
                Read More <FaArrowRight />
              </Button>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default BlogCard;
