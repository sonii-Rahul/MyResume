import React  from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import { DiAndroid } from "react-icons/di";

function Resume() {
  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>

        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <DiAndroid /> 
            <Resumecontent
              title="Android Trainee React [Aryavrat infotec]  /> " 
              date="Aug2019 -nov2019"
              content={[
                "Developing the web pages using react js. working and assiegning acces to server to other employes",
              ]}
            />
             <Resumecontent
              title="Cyber Ops  /> " 
              date="3months"
              content={[
                "training on diffrent cyber acttacks and forensics",
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="MCA DAYANANDA SAGAR INSTITUTIONS "
              date="2022 - present"
              content={[]}
            />
            <Resumecontent
              title="B.COM Rajasthan University "
              date="2018 - 2021"
              content={["percentage: 53%"]}
            />
            <Resumecontent
              title="12TH BOARD Raceme Public School"
              date="2016 - 2018"
              content={["Precentage: 59%"]}
            />
            <Resumecontent
              title="10TH BOARD  Mother Teresa Shikshan Sansthan "
              date="2011 - 2016"
              content={["Precentage: 59%"]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
