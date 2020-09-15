import React from "react"
import style from './Users.module.css'
const Users = (props) => {
    if (props.users.lenght === 0) {
    props.setUsers([
        {id : "1",  followed : false,
                    photoUrl : 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Dmitry_Nagiev_2017_4.jpg/274px-Dmitry_Nagiev_2017_4.jpg',
                    fullName : 'Dmitry', 
                    status : 'I am a boss',
                    location : {
                        city : 'Minsk',
                        country : 'Belarus'
                    }},
        {id : "2",  followed : true,
                    photoUrl : 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Dmitry_Nagiev_2017_4.jpg/274px-Dmitry_Nagiev_2017_4.jpg',
                    fullName : 'Alex', 
                    status : 'I am a boss too',
                    location : {
                        city : 'Moscow',
                        country : 'Russia'
                    }},
        {id : "3",  followed : false,
                    photoUrl : 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Dmitry_Nagiev_2017_4.jpg/274px-Dmitry_Nagiev_2017_4.jpg',
                    fullName : 'Andrew', 
                    status : 'I am a boss too',
                    location : {
                        city : 'Kiev',
                        country : 'Ukraine'
                    }}
    ])}
    
    return <div>
        {
            props.users.map( user => <div key = {user.id}>
                <div>
                    <div>
                        <img src = {user.photoUrl} className = {style.user_photo} />
                    </div>
                    <div>
                        {user.followed 
                        ? <button onClick = {() => {props.unfollow(user.id)}}>Unfollow</button> 
                        : <button onClick = {() => {props.follow(user.id)}}>Follow</button>}
                    </div>
                </div>
                <div>
                    <div>
                        <div>{user.fullName}</div>
                        <div>{user.status}</div>
                    </div>
                    <div>
                        <div>{user.location.country}</div>
                        <div>{user.location.city}</div>
                    </div>
                </div>
            </div>)
        }
    </div>
}

export default Users;

