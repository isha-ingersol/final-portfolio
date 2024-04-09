import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import "../css-components/ProjectCard.css"; // Import the CSS file

export const ProjectCard = ({ title, description, imgUrl, imgWidth, imgHeight, tags }) => {
  return (
    <Card className="project-card">
      <Card.Body>
        <Row className="align-items-center">
          <Col xs={4} md={3}>
            <Card.Img src={imgUrl} style={{ width: imgWidth, height: imgHeight }} />
          </Col>
          <Col xs={8} md={9}>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{description}</Card.Text>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};
