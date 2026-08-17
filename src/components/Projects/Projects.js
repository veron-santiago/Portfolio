import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import pokemons from "../../Assets/Projects/pokemons.gif";
import pokedex_favoritos from "../../Assets/Projects/favoritos.gif";
import colosal from "../../Assets/Projects/colosal.gif";
import pausa from "../../Assets/Projects/pausa.png";
import Python from "../../Assets/TechIcons/Python.svg";
import SQL from "../../Assets/TechIcons/SQL.svg";
import ReactIcon from "../../Assets/TechIcons/React.svg";
import Java from "../../Assets/TechIcons/Java.svg";
import Teamwork from "../../Assets/Projects/teamwork.png";
import SQLite from "../../Assets/TechIcons/sqlite.png";
import HTML from "../../Assets/TechIcons/html.png";
import CSS from "../../Assets/TechIcons/css.png";
import Spring from "../../Assets/TechIcons/spring.png";
import chile from "../../Assets/Projects/chile.gif";
import busqueda from "../../Assets/Projects/busqueda.gif";
import Gradle from "../../Assets/TechIcons/gradle.webp";
import Maven from "../../Assets/TechIcons/maven.png";
import booking1 from "../../Assets/Projects/booking1.png";
import booking2 from "../../Assets/Projects/booking2.png";
import booking3 from "../../Assets/Projects/booking3.png";
import booking4 from "../../Assets/Projects/booking4.png";
import booking5 from "../../Assets/Projects/booking5.png";

import { type } from "@testing-library/user-event/dist/type";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mis <strong className="purple">Proyectos </strong>
        </h1>
        <p style={{ color: "white" }}>
          Estos son algunos de los proyectos en los que trabajé recientemente.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Sistema de Facturación con QR"
              imgs={
                [
                  {type: "youtube", content: ""}
                ]
              }
              description="Aplicación web para gestionar productos, clientes y facturas. Integra Mercado Pago mediante OAuth2 para generar enlaces de pago dinámicos codificados como códigos QR (ZXing) para cada factura. Incluye autocompletado de datos y envío automático de facturas por correo electrónico."
              ghLink="https://github.com/veron-santiago/Invoice-qr"
              techs={
                [
                  {name: "Java", icon: Java},
                  {name: "Spring", icon: Spring},
                  {name: "React", icon: ReactIcon},
                  {name: "Gradle", icon: Gradle},
                  {name: "PostgreSQL", icon: SQL}
                ]
              }
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Sistema de Reservas con Microservicios"
              imgs={
                [
                  {type: "image", content: booking1},
                  {type: "image", content: booking2},
                  {type: "image", content: booking3},
                  {type: "image", content: booking4},
                  {type: "image", content: booking5}
                ]
              }
              description="Backend distribuido basado en microservicios para la gestión de reservas deportivas. Implementa API Gateway, Eureka y comunicación entre servicios mediante Feign. Incluye autenticación JWT centralizada y búsqueda de instalaciones por ubicación, deporte y fecha."
              ghLink="https://github.com/veron-santiago/booking-microservices"
              techs={
                [
                  {name: "Java", icon: Java},
                  {name: "Spring", icon: Spring},
                  {name: "React", icon: ReactIcon},
                  {name: "Maven", icon: Maven}
                ]
              }
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Plants vs Grinch"
              imgs={
                [
                  {type: "image", content: chile},
                  {type: "image", content: colosal},
                  {type: "image", content: pausa}
                ]
              }
              description="Juego 2D con mecánicas de defensa en tiempo real. Implementa animaciones mediante temporizadores, diferentes tipos de enemigos y elementos del escenario como lápidas y pociones con efectos positivos o negativos. Incluye gestión de plantas, enemigos y proyectiles."
              ghLink="https://github.com/veron-santiago/Plants-vs-Grinch"
              techs={[
                {name: "Teamwork", icon: Teamwork},
                {name: "Java", icon: Java}
              ]}
            />
          </Col>

           <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Pokédex Interactiva"
              imgs={
                [
                  {type: "image", content: pokemons},
                  {type: "image", content: busqueda},
                  {type: "image", content: pokedex_favoritos}
                ]
              }
              description="Aplicación web que obtiene datos de PokeAPI para mostrar y filtrar Pokémon por nombre y tipo. Incluye autenticación de usuarios opcional y gestión persistente de favoritos."
              ghLink="https://github.com/veron-santiago/ip-1c2025-alumnos"
              techs={[
                {name: "Teamwork", icon: Teamwork},
                {name: "Python", icon: Python},
                {name: "HTML", icon: HTML},
                {name: "CSS", icon: CSS},
                {name: "SQLite", icon: SQLite},
              ]}
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
