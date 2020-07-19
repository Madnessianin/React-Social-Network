import React from 'react';
import classes from './../Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    return (
        <div className={classes.avatar}>
            <img src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2020/06/18/10/avatar.jpg" />
            <NavLink className={classes.link} activeClassName={classes.active} to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    )
}


export default DialogItem;