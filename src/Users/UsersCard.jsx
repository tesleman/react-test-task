import React, {useEffect} from "react";
import s from "./usrs.module.css"
import {Button, Col, Container, OverlayTrigger, Row, Tooltip} from "react-bootstrap";

let UsersCard = (props) => {

    useEffect(() => {
        if (props.users === null) {
            props.getUsersThunk(props.pageSize)
        }

    }, [props.users])
    console.log(props)
    let changeEventHandler = () => {
        let page = props.pageSize

        page += 6
        props.currentUserThunk(page)

    }

    console.log(props.total)

    return (
        <div>
            <Container>


                <Row> {props.users ? props.users.map(u => <Col key={u.id} md={4}>
                    <figure className={s.figure}>
                        <img className={s.img} src={u.photo} alt=""/>
                        <OverlayTrigger placement={'bottom'} overlay={<Tooltip>{u.name}</Tooltip>}>
                            <h4 className={s.figureh4}>{u.name}</h4>
                        </OverlayTrigger>
                        <OverlayTrigger placement={'bottom'} overlay={<Tooltip> {u.position}</Tooltip>}>
                            <p className={s.position}>{u.position}</p>
                        </OverlayTrigger>
                        <OverlayTrigger placement={'bottom'} overlay={<Tooltip>{u.email}</Tooltip>}>
                            <p className={s.mail}>{u.email}</p></OverlayTrigger>
                        <OverlayTrigger placement={'bottom'} overlay={<Tooltip>{u.phone}</Tooltip>}>
                            <p className={s.phone}>{u.phone}</p>
                        </OverlayTrigger>
                    </figure>
                </Col>) : ""}

                </Row>
                <Row>
                    {(props.total <= (props.users && props.users.length)) ?
                        <Button className={s.button} disabled>Disabled</Button> :
                        <Button className={s.button} onClick={changeEventHandler}> Show more</Button>}

                </Row>

            </Container>
        </div>


    )
}
export default UsersCard