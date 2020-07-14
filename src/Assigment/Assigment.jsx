import React from "react";
import s from "./assigment.module.css"
import {Button, Col} from "react-bootstrap";

const Assigment = () => {

    return (<div className={s.relative} >
<div  className={s.image}> </div>

            <Col md={7}>

                <h1 className={s.h1}>TEST ASSIGNMENT
                     <div className={s.wordsps}>FOR FRONTEND</div>
                    <div className={s.wordsps1}> DEVELOPER POSITION</div></h1>
                <p className={s.secondText}>We kindly remind you that your test assignment should be
                    submitted as a link to github/bitbucket repository. Please be patient, we consider and respond to
                    every application that meets minimum requirements. We look forward to your submission. Good luck!
                    The photo has to scale in the banner area on the different screens</p>
                <Button className={s.button}>Sing up now</Button>
            </Col>

        </div>
    )
}
export default Assigment