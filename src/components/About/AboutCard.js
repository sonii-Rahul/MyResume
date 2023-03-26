import React from "react";
import Card from "react-bootstrap/Card";
import{GiAirplaneDeparture} from "react-icons/gi"
import {BsPen} from "react-icons/bs"
import {CgGames} from "react-icons/cg"
import {ImSpotify} from "react-icons/im"

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Rahul Soni  </span>
            from <span className="purple"> Sambhar lake jaipur, India.</span>
            <br />I am a graduate from Bcom Rajasthan University
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <CgGames /> Playing Games
            </li>
            <li className="about-activity">
              <BsPen /> Writting Tech Blogs
            </li>
            <li className="about-activity">
              <GiAirplaneDeparture/> Travelling
            </li>
            <li className="about-activity">
              <ImSpotify/> Music
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Rahul Soni</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
