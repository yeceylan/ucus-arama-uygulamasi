import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Icon from "../assets/plane.png"

export default function Header() {
    return (
      <div>
        <Navbar className="bg-body-tertiary">
          <Container>
            <Navbar.Brand >
              <img
                alt=""
                src={Icon}
                width="40"
                height="40"
                className="d-inline-block align-top"
              />
              Uçuş Arama Uygulaması
            </Navbar.Brand>
          </Container>
        </Navbar>
      </div>
    );
}

 
