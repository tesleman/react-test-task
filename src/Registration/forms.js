import React from "react";
import {Col, Form} from "react-bootstrap";
import s from "./error.module.css"


export let renderField = ({
                              label,
                              input,
                              type,
                              formtext,
                              placeholder,
                              meta:{touched,error},
                              ...props
                          }) => {
    const hasError = touched && error

    return (
        <Form.Group controlId="formHorizontalName">
            <Form.Label column sm={2}>
                {label}
            </Form.Label>
            <Col sm={11}>
                    <Form.Control{...props} {...input} type={type} label={label} placeholder={placeholder}/>


                {hasError ? <span className={s.error}>{error}</span> : ''

                }
                <Form.Text className="text-muted">
                    {formtext}
                </Form.Text>

            </Col>
        </Form.Group>

    )
}



