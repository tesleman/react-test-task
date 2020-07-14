import React from "react";
import s from "./heade.module.css"
import imagen from "./logo_1.svg"
import {Container, Nav, Row} from "react-bootstrap";

let Header = () => {
    return (<Container fluid>
            <Row>
                <img alt='#' src={imagen} className={s.logo}/>


                <Nav>
                    <Nav.Link className={s.navigation} href="#deets">More deets</Nav.Link>
                    <Nav.Link className={s.navigation} eventKey={2} href="#memes">
                        Dank memes
                    </Nav.Link>
                </Nav>
            </Row>
        </Container>
    )
}

export default Header