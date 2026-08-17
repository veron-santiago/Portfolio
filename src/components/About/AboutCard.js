import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hola! Soy <span className="purple">Santiago Verón</span>{" "}
            de <span className="purple">Buenos Aires, Argentina</span>.
            <br /> Actualmente estudio la carrera de {" "}
            <span className="purple"><a href="https://www.ungs.edu.ar/carrera/licenciatura-en-sistemas"   target="_blank" style={{color: "inherit" }}>Licenciatura en Sistemas</a></span> en la {" "}
            <span className="purple"><a href="https://www.ungs.edu.ar/"   target="_blank" style={{color: "inherit" }}>Universidad Nacional de General Sarmiento (UNGS).</a></span>.
            <br />
            Me apasiona resolver problemas mediante el desarrollo de software y mejorar continuamente mis habilidades a través de proyectos académicos y personales.
            <br />
            Actualmente busco mi primera oportunidad profesional en el desarrollo de software, mientras continúo creciendo tanto técnica como profesionalmente.
            <br />
          </p>

          <footer className="blockquote-footer"></footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
