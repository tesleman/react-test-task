import React from "react";
import s from './usrs.module.css'
import {Container} from "react-bootstrap";
import UsersCard from "./UsersCard";
import {compose} from "redux";
import {connect} from "react-redux";
import {currentUserThunk, getUsersThunk} from "../redusers/users-reduser";

let Users = (props) =>{
    return(
        <div>
            <Container className={s.contain}>
                <h1 className={s.h1}>Our cheerful users</h1>
                <p className={s.p1}>
                    Attention! Sorting users by registration date
                </p>


                <UsersCard {...props}/>


            </Container>

        </div>
    )
}
let mapStateToProps = (state) =>{
    return{
        users: state.users.users,
        pageSize: state.users.pageSize,
        changePage: state.users.changePage,
        total: state.users.total
    }


}

export default compose(
        connect(mapStateToProps, {getUsersThunk, currentUserThunk}))(Users)
