import React from "react"
import style from './Users.module.css'
import Paginator from "../Common/Paginator/Paginator";
import User from "./User/User";


const Users = (props) => {
    
    return <div>
        <Paginator totalCount = {props.totalUsersCount}
                   pageSize = {props.pageSize} 
                   currentPage = {props.currentPage}
                   onPageChanged = {props.onPageChanged}/>
    
    {props.users.map( user => <User user = {user}
                                    follow = {props.follow}
                                    unfollow = {props.unfollow}
                                    followingIsProgress = {props.followingIsProgress} />)}
    </div>
}

export default Users;

