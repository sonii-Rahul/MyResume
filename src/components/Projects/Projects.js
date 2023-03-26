import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <Row style={{ justifyContent: "auto", paddingBottom: "100px" , paddingTop: "100px"}}>
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="SORRY"
              description="Projects will be added shortly"
              link=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
