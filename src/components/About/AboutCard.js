import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Dhyan Patoliya </span>
            from <span className="purple"> Gujarat, India.</span>
            <br />
            I am currently learning as a software developer at the <span className="purple">Internet </span>.
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Streaming on Youtube 
            </li>
            <li className="about-activity">
              <ImPointRight /> Modration on Discord
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Just Move on with OLA AMIGO"{" "}
          </p>
          <footer className="blockquote-footer">DhyanCanPlay</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
