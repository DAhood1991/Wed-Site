import React from "react";
import {NavLink} from "react-router-dom";
import s from '../Messages.module.css'
type DialogsItemsPropsType ={
    id:number
    name:string
}

export const DialogsItems:React.FC<DialogsItemsPropsType>= (props) => {
    return (
        <div className={s.dialog + " " + s.active}>
            <NavLink to={'messages' + props.id} activeClassName={s.active}> {props.name}</NavLink>
            <img src='https://images.pexels.com/photos/2050979/pexels-photo-2050979.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'/>
        </div>
    )
}