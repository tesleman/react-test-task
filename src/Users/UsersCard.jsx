import React, {useEffect} from "react";
import s from "./usrs.module.css"
import {Button, Col, Container, OverlayTrigger, Row, Tooltip} from "react-bootstrap";

let UsersCard = (props) => {

    useEffect(() => {
        if (props.users === null) {
            props.getUsersThunk(props.pageSize)
        }

    }, [props])

    let changeEventHandler = () => {
        let page = props.pageSize
        page += 6
        props.currentUserThunk(page)
    }

 let overlay = (info, stile) =>{
  return  <OverlayTrigger placement={'bottom'} overlay={<Tooltip> {info}</Tooltip>}>
      <p className={stile}>{info}</p>
  </OverlayTrigger>
    }

    return (
        <div>
            <Container>


                <Row> {props.users ? props.users.map(u => <Col key={u.id} md={4}>
                    <figure className={s.figure}>
                        <img className={s.img} src={u.photo} alt=""/>
                        <OverlayTrigger placement={'bottom'} overlay={<Tooltip>{u.name}</Tooltip>}>
                            <h4 className={s.figureh4}>{u.name}</h4>
                        </OverlayTrigger>
                        {overlay(u.position, s.position)}
                        {overlay(u.email, s.mail)}
                        {overlay(u.phone, s.phone)}
                        
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