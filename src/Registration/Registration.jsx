import React, {Component, useEffect, useState} from "react";
import s from "./registration.module.css"
import {Row, Form, Col, Button, Container, Modal} from "react-bootstrap";
import {Field, reduxForm} from "redux-form";
import {renderField} from "./forms";
import {email, phone, required} from "../validation/validators";
import {connect} from "react-redux";
import {thunkPositions, thunkReg, thunksetToken} from "../redusers/registrations-reduser";
import {compose} from "redux";
import img from "../Acquainted/LeptopGuy.png";

let target = React.createRef()
let hiddenFileInput = React.createRef()

class forCustom extends Component {
    constructor() {
        super();
        this.state = {
            name: "React"
        };
        this.onValueChange = this.onValueChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        this.props.thunksetToken()

    }

    onValueChange(id) {
        this.setState({
            selectedOption: id
        });
    }


    tuNumber = (value) => {
        return +value
    }

    handleClick = event => {
        hiddenFileInput.current.click();
    };

    clearImg = () => {
        this.setState({
            src: null
        })
    }
    handleChange = event => {
        const fileUploaded = event.target.files[0];
        if (this.state.src == null) {
            let reader = new FileReader();
            reader.readAsDataURL(fileUploaded)
            reader.onload = (e) => {
                this.setState({
                    src: e.target.result
                })

            }
        }
        this.props.setPhoto(fileUploaded)

    };

    render() {


        return (
            <Container id="services">
                <Col md={{span: 7, offset: 3}}>


                    <form className={s.tac} ref={target} onSubmit={this.props.handleSubmit}>
                        <Field component={renderField} validate={[required]} label={"Name"} placeholder="Name"
                               name="Name"
                               type="Name"/>
                        <Field component={renderField} validate={[required, email]} label={"Email"} placeholder="Email"
                               name="Email" type="Email"/>
                        <Field component={renderField} validate={[required, phone]} label={"Phone"} placeholder="+380"
                               name="Phone"
                               type="Phone"/>

                        <fieldset>
                            <Col sm={10}>

                                <div>
                                    <label>Select your position</label>
                                    <div className={s.radio} style={{
                                        flex: 1,
                                        display: 'flex',
                                        flexFlow: 'column nowrap'
                                    }}>

                                        {this.props.positions ? this.props.positions.map(u =>
                                            <label className={s.radio} htmlFor={u.id} key={u.id}>
                                                <Field
                                                    checked={this.state.selectedOption === u.id}
                                                    onChange={() => this.onValueChange(u.id)}
                                                    key={u.id}
                                                    name="position"
                                                    component="input"
                                                    value={u.id}
                                                    label={u.name}
                                                    id={u.id}
                                                    normalize={this.tuNumber}
                                                    type="radio"
                                                />
                                                <div className={s.radio__text}>{u.name}</div>
                                            </label>
                                        ) : ""}

                                    </div>
                                </div>

                            </Col>

                        </fieldset>
                        {!this.state.src ? <Form.Group controlId="formHorizontalCheck">
                                <Col sm={11}>
                                    <div className="custom-file-label" onClick={this.handleClick}
                                         style={{maxWidth: 100 + 'px'}}
                                         alt="#"/>
                                    <input type="file"
                                           name="name"
                                           style={{display: 'none'}}
                                           ref={hiddenFileInput}
                                           onChange={this.handleChange}
                                    />

                                </Col>
                            </Form.Group>
                            : <div><img className={s.imgHeiht} src={this.state.src} alt='#'/> <Button variant="light"
                                                                                                      onClick={this.clearImg}>Clear</Button>
                            </div>}

                        <Form.Group as={Row}>
                            <Col sm={{span: 10, offset: 2}}>
                                <Button type="submit" className={s.button}>Sign
                                    up now</Button>
                            </Col>
                        </Form.Group>
                    </form>
                </Col>
                <p className={s.copiright}>© abz.agency specially for the test task</p>
            </Container>
        )
    }
}

let ContactForm = reduxForm({form: 'contact', initialValues: {Phone: "+380"}})(forCustom)

let Registration = (props) => {

    useEffect(() => {
        if (props.positions === null) {
            props.thunkPositions()
        }
        if (props.ModalMessage) {
            handleShow()
        }
    }, [props])
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    let [photo, setPhoto] = useState('')

    let sub = (data) => {
        let formData = new FormData();
        formData.append('name', data.Name)
        formData.append('email', data.Email)
        formData.append('phone', data.Phone)
        formData.append('position_id', data.position)
        formData.append('photo', photo)
        props.thunkReg(formData, props.token)

    }

    return (<div>
            <h1 className={s.h1}>
                Register to get a work
            </h1>
            <p className={s.p1}>
                Attention! After successful registration and alert, update the list of users in the block from the top
            </p>
            <ContactForm onSubmit={sub} setPhoto={setPhoto} {...props}/>
            <Modal show={show} animation={true}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>{props.ModalMessage}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>

                </Modal.Footer>
            </Modal>

        </div>
    )
}
let mapStateToProps = (state) => {
    return {
        positions: state.registrations.positions,
        token: state.registrations.token,
        ModalMessage: state.registrations.ModalMessage,
    }
}
export default compose(connect(mapStateToProps, {thunkPositions, thunkReg, thunksetToken})(Registration))