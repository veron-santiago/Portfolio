import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { Col, Row } from "react-bootstrap";
import ProjectCarousel from "../ProjectCarousel";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      {/* <Card.Img variant="top" src={props.imgPath} alt="card-img" /> */}
      <ProjectCarousel imgs={props.imgs}></ProjectCarousel>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        {props.ghLink && (
          <Button variant="primary" href={props.ghLink} target="_blank">
            <BsGithub /> &nbsp;
            {props.isBlog ? "Blog" : "GitHub"}
        </Button>
        )}
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}

        {props.techs && (
          <Row className="project-tech-row" style={{ justifyContent: "center", paddingTop: "10px"}}>
            {props.techs.map((tech, index) => (
              <Col key={index} xs={4} md={2} className="tech-icons tech-icons-cards">
                <img src={tech.icon} alt={tech.name} />
                <div className="tech-icons-text">{tech.name}</div>
              </Col>
            ))}
          </Row>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
