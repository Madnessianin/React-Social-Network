import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';


const ProfileStatusWithHooks = (props) => {
    return (
        <div>
            {props.isOwner ? <Status {...props} /> : <span>{props.status || "--"}</span>}
        </div>
    )
}

const Status = (props) => {
    let [editMode, setEditMode] = useState(false),
        [status, setStatus] = useState(props.status)
    
    useEffect(() => {
        setStatus(props.status)
    }, [props.status])
    
    return (
        <div>
            {!editMode &&
                <div>
                    <span onDoubleClick={()=>{setEditMode(true)}}>{status || "--"}</span>
                </div>}
            {editMode &&
                <div>
                    <input autoFocus={true}
                           onBlur = {()=>{
                               setEditMode(false)
                               props.updateStatus(status)}}
                           onChange = {(event)=>{setStatus(event.currentTarget.value)}}
                           value = {status}/>
                </div>}
        </div>
    )
}
export default ProfileStatusWithHooks;