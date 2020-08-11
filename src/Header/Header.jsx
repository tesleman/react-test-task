import React from "react";
import s from "./heade.module.css"
import imagen from "./logo_1.svg"
import {Container, FormControl, Nav, Navbar, NavDropdown, Row} from "react-bootstrap";

let Header = () => {
    return (<Container fluid>
            <Row>
                <img alt='#' src={imagen} className={s.logo}/>

                <Navbar  expand="lg">

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link>
                           
                        </Nav>

                    </Navbar.Collapse>
                </Navbar>
            </Row>
        </Container>
    )
}

export default Header