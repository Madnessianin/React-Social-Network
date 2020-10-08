import React from "react"
import style from './Users.module.css'
import userPhoto from '../../assets/images/user.png'
import { NavLink } from "react-router-dom";


const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount/props.pageSize),
            pages = [];
        
        
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }
    return <div>
        <div>
            {pages.map(page => {
            return <span className = {props.currentPage === page && style.selectPage}
            onClick = {(event) => {props.onPageChanged(page);}}>{page}</span>})}
        </div>
    {
        props.users.map( user => <div key = {user.id}>
            <div>
                <div>
                    <NavLink to = {"/profile/" + user.id}>
                        <img src = {user.photos.small != null ? user.photos.small : userPhoto} className = {style.user_photo} />
                    </NavLink>
                </div>
                <div>
                    { user.followed 
                        ? <button disabled = {props.followingIsProgress.some(id => id === user.id)} 
                        onClick = {() => {props.unfollow(user.id)}} >Unfollow</button>
                        : <button disabled = {props.followingIsProgress.some(id => id === user.id)} 
                        onClick = {() => {props.follow(user.id)}}>Follow</button>
                    }
                </div>
            </div>
            <div>
                <div>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                </div>
                <div>
                    <div>{"user.location.country"}</div>
                    <div>{"user.location.city"}</div>
                </div>
            </div>
        </div>)
    }
    </div>
    }


export default Users;

