import { Col, Row } from "react-bootstrap";
import Javascript from "../../Assets/TechIcons/Javascript.svg";
import ReactIcon from "../../Assets/TechIcons/React.svg";
import Java from "../../Assets/TechIcons/Java.svg";
import Python from "../../Assets/TechIcons/Python.svg";
import Git from "../../Assets/TechIcons/Git.svg";
import Docker from "../../Assets/TechIcons/Docker.svg";
import SQL from "../../Assets/TechIcons/SQL.svg";
import SQLite from "../../Assets/TechIcons/sqlite.png";
import Postman from "../../Assets/TechIcons/Postman.svg";
import Spring from "../../Assets/TechIcons/spring.png";
import Gradle from "../../Assets/TechIcons/gradle.webp";
import Maven from "../../Assets/TechIcons/maven.png";

function Techstack() {
  return (
    <div style={{ marginTop: 20, marginLeft: 30 }}>

      <Row style={{ margin: 0, justifyContent: "center" }}>
        {/* Languages */}
        <Col xs="auto" className="tech-icons" style={{ display: "flex", alignItems: "center" }}>
          <img src={Java} alt="Java" />
          <div className="tech-icons-text">Java</div>
        </Col>

        <Col xs={4} md={2} className="tech-icons">
          <img src={Javascript} alt="javascript" />
          <div className="tech-icons-text">Javascript</div>
        </Col>

        <Col xs={4} md={2} className="tech-icons">
          <img src={Python} alt="Python" />
          <div className="tech-icons-text">Python</div>
        </Col>

        {/* Frameworks/Libraries */}
        <Col xs={4} md={2} className="tech-icons">
          <img src={Spring} alt="spring" />
          <div className="tech-icons-text">Spring</div>
        </Col>

        <Col xs={4} md={2} className="tech-icons">
          <img src={ReactIcon} alt="react" />
          <div className="tech-icons-text">React</div>
        </Col>

        {/* DevTools */}
        <Col xs="auto" className="tech-icons" style={{ display: "flex", alignItems: "center" }}>
          <img src={Git} alt="git" />
          <div className="tech-icons-text">Git</div>
        </Col>

        <Col xs={4} md={2} className="tech-icons">
          <img src={Postman} alt="postman" />
          <div className="tech-icons-text">Postman</div>
        </Col>

        <Col xs={4} md={2} className="tech-icons">
          <img src={Docker} alt="docker" />
          <div className="tech-icons-text">Docker</div>
        </Col>

        <Col xs={4} md={2} className="tech-icons">
          <img src={Gradle} alt="gradle" />
          <div className="tech-icons-text">Gradle</div>
        </Col>

        <Col xs={4} md={2} className="tech-icons">
          <img src={Maven} alt="maven" />
          <div className="tech-icons-text">Maven</div>
        </Col>

        {/* Databases */}
        <Col xs="auto" className="tech-icons" style={{ display: "flex", alignItems: "center" }}>
          <img src={SQL} alt="sql" />
          <div className="tech-icons-text">PostgreSQL</div>
        </Col>

        <Col xs={4} md={2} className="tech-icons">
          <img src={SQLite} alt="sqlite" />
          <div className="tech-icons-text">SQLite</div>
        </Col>
      </Row>



    </div>


  );
}

export default Techstack;
