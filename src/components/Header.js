import React from "react";
import SugarRushIcon from "../icons/sugar.png";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-scroll";
import { HashLink } from "react-router-hash-link";
import Cart from "./Cart";

export default function Header(props) {
  return (
    <div style={{height: "100%"}}>
      <Navbar expand="sm" style={{ backgroundColor: "#f27d64", fontFamily: 'Roboto, sans-serif', color: "#f4eb7b", borderBottom: "2px solid #ec8013", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" }}>
        <Container className="d-flex justify-content-between align-items-center">
          <div>
            <Navbar.Brand href="#home">
              <img src={SugarRushIcon} height="80px" className="m-1 p-1" alt="MDB Logo" loading="lazy" />
              <span style={{ color: "#f4eb7b" }}>SugarRush</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/" style={{color: "#f4eb7b"}}>Home</Nav.Link>
                <Nav.Link as={Link} smooth to="menu-section" duration={50} style={{ cursor: 'pointer', color: "#f4eb7b" }}> Menu </Nav.Link>
                <Nav.Link as={Link} smooth to="about-section" duration={50} style={{ cursor: 'pointer', color: "#f4eb7b" }}> About Us </Nav.Link>
                <Nav.Link as={Link} smooth to="contact-section" duration={50} style={{ cursor: 'pointer', color: "#f4eb7b" }}> Contact Us </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </div>
          {
            props.show === true && 
            <div>
              <Cart style={{cursor: 'pointer'}} size={props.size} data={props.data} setCart={props.setCart} clearAll={props.clearAll} handleChange={props.handleChange} />
            </div>
          }
        </Container>
      </Navbar>
    </div>
  );
}
