import React from "react";
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

type PropsDialogs = {
    name: string
    id: number
}
type PropsMessage = {
    message: string
}


const DialogsItems = (props: PropsDialogs) => {
    return (
        <div className={s.dialog + " " + s.active}>
            <NavLink to={'dialogs' + props.id} activeClassName={s.active}> {props.name}</NavLink>
        </div>
    )
}
const Message = (props: PropsMessage) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}
export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogsItems name={"a"} id={1}/>
                <DialogsItems name={"b"} id={2}/>
                <DialogsItems name={"c"} id={3}/>
                <DialogsItems name={"d"} id={4}/>
                <DialogsItems name={"e"} id={5}/>

            </div>
            <div className={s.messages}>
                <Message message={'YO'}/>
                <Message message={'YOY'}/>
                <Message message={'YOY HI'}/>
            </div>

        </div>
    )
}