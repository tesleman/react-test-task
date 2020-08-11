import React from "react";
import s from './acquainted.module.css'
import {Button, Col, Container, Row} from "react-bootstrap";
import img from './LeptopGuy.png'

let Acquainted = () => {
    return (
        <div>
            <Container>
                <h1 className={s.h1}>Let's get acquainted</h1>
                <Row>
                    <Col md={5}>
                        <img height={285} className={s.imagenationLeptopman} src={img} alt=""/>

                    </Col>
                    <Col md={7}>
                        <h2 className={s.h2}>I am cool frontend developer</h2>
                        <p className={s.p1}>
                            We will evaluate how clean your approach to writing CSS and Javascript code is. You can use
                            any CSS and Javascript 3rd party libraries without any restriction.
                        </p>
                        <p className={s.p2}>
                            If 3rd party css/javascript libraries are added to the project via bower/npm/yarn you will
                            get bonus points. If you use any task runner (gulp/webpack) you will get bonus points as
                            well. Slice service directory page P​SD mockup​ into HTML5/CSS3.
                        </p>
                        <Button variant="light" href="#services" className={s.button}>Sing up now</Button>
                    </Col>
                </Row>
            </Container>


        </div>
    )
}

export default Acquainted