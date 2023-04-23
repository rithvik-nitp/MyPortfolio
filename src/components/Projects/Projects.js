import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Alumni from "../../Assets/Projects/Alumni.png";
import BiharCart from "../../Assets/Projects/BiharCart.png";



function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Alumni}
              isBlog={false}
              title="Alumni-Cell-NITP"
              description="A Website for Alumni Association Of NIT PATNA build with react.js, Tailwind-css, and Firebase. Have features which allow the alumni to register themselves and donate."
              ghLink="https://github.com/Rishabh-25-code/alumini-cell-nitp"
              demoLink="https://alumini-nitp.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={BiharCart}
              isBlog={false}
              title="BiharCart"
              description="An Ecommerce-App"
              ghLink="https://github.com/rithvik-nitp/BiharCart"
              demoLink="#"
            />
          </Col>

         
        
         
         

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
