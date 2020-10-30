import React from "react"
import style from './Users.module.css'
import Paginator from "../Common/Paginator/Paginator";
import User from "./User/User";


const Users = (props) => {
    
    return <div className = {style.users}>
        <Paginator totalCount = {props.totalUsersCount}
                   pageSize = {props.pageSize} 
                   currentPage = {props.currentPage}
                   onPageChanged = {props.onPageChanged}/>
    
        <div className = {style.inner}>
            {props.users.map( user => <div key = {user.id}><User user = {user}
                                            follow = {props.follow}
                                            unfollow = {props.unfollow}
                                            followingIsProgress = {props.followingIsProgress} /></div>)}
        </div>
        

    </div>
}

export default Users;

