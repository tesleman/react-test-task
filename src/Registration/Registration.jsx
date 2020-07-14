import React from "react";
import s from "./registration.module.css"
import {Row, Form, Col, Button, Container} from "react-bootstrap";

let Registration = () => {
    return (<div>
            <h1 className={s.h1}>
                Register to get a work
            </h1>
            <p className={s.p1}>
                Attention! After successful registration and alert, update the list of users in the block from the top
            </p>
            <Container>
                <Col md={{span: 7, offset: 3}}>


                    <Form className={s.tac}>
                        <Form.Group controlId="formHorizontalName">
                            <Form.Label column sm={2}>
                                Name
                            </Form.Label>
                            <Col sm={11}>
                                <Form.Control type="name" placeholder="Your Name"/>
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Col>
                        </Form.Group>

                        <Form.Group controlId="formHorizontalEmail">
                            <Form.Label column sm={2}>
                                Email
                            </Form.Label>
                            <Col sm={11}>
                                <Form.Control type="email" placeholder="Email"/>
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Col>
                        </Form.Group>

                        <Form.Group controlId="formHorizontalPassword">
                            <Form.Label column sm={2}>
                                Password
                            </Form.Label>
                            <Col sm={11}>
                                <Form.Control type="phone" placeholder="Phone"/>
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Col>

                        </Form.Group>
                        <fieldset>
                            <Form.Group>
                                <Form.Label as="legend" column sm={2}>
                                    Radios
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Check
                                        custom
                                        type="radio"
                                        label="first radio"
                                        name="formHorizontalRadios"
                                        id="formHorizontalRadios1"
                                    />
                                    <Form.Check
                                        custom
                                        type="radio"
                                        label="second radio"
                                        name="formHorizontalRadios"
                                        id="formHorizontalRadios2"
                                    />
                                    <Form.Check
                                        custom
                                        type="radio"
                                        label="third radio"
                                        name="formHorizontalRadios"
                                        id="formHorizontalRadios3"
                                    />
                                </Col>
                            </Form.Group>
                        </fieldset>
                        <Form.Group controlId="formHorizontalCheck">
                            <Col sm={11}>
                                <Form.File
                                    id="custom-file-translate-scss"
                                    label="Custom file input"
                                    lang="en"
                                    custom
                                />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row}>
                            <Col sm={{span: 10, offset: 2}}>
                                <Button className={s.button}>Sign up now</Button>
                            </Col>
                        </Form.Group>
                    </Form>
                </Col>
            </Container>

        </div>
    )
}
export default Registration