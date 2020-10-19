import React from "react"
import style from '../Users.module.css'
import userPhoto from '../../../assets/images/user.png'
import { NavLink } from "react-router-dom";



const User = ({user, follow, unfollow, followingIsProgress}) => {
    
    return  (
        <div key = {user.id}>
            <div>
                <div>
                    <NavLink to = {"/profile/" + user.id}>
                        <img src = {user.photos.small != null ? user.photos.small : userPhoto} className = {style.user_photo} />
                    </NavLink>
                </div>
            <div>
            { user.followed 
                        ? <button disabled = {followingIsProgress.some(id => id === user.id)} 
                        onClick = {() => {unfollow(user.id)}} >Unfollow</button>
                        : <button disabled = {followingIsProgress.some(id => id === user.id)} 
                        onClick = {() => {follow(user.id)}}>Follow</button>
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
        </div>
    )
    
    
}


export default User;

