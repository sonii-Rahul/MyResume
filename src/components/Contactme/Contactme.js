import React from "react";
import { Container,} from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { AiOutlinePhone ,AiFillInstagram } from "react-icons/ai";
import { SiGmail } from "react-icons/si"
import contactlogo from "../LOGO.png"

function Contactme() {
  return (
    <Container fluid className="about-section">
      <Container><div>

        <Card className="project-card-view">
                 
          <Card.Body>
            <Card.Title
              style={{ color: "whitesmoke", fontSize: "35px", fontFamily: "cursive" }}
            >"Contact Me"</Card.Title>
            <Card.Img variant="side" src={contactlogo} alt="card-img"  className="contact-pic"/>
             <Card.Text style={{ textAlign: "justify", paddingBottom: "140px", paddingTop: "100px", color: "whitesmoke", fontSize: "20px" }}>
              <SiGmail /> -  rahuls5788@gmail.com                 
              <br />
              <AiOutlinePhone />
              - 9057725167 
              <br />
              <AiFillInstagram />
               -- sonii__rahul
            </Card.Text>
              </Card.Body>
        </Card>

      </div>
      </Container>
    </Container>
  );
}

export default Contactme;
