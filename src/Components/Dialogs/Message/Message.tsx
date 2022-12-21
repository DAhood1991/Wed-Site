import s from "../Messages.module.css";
import React from "react";

type MessagePropsType ={
    message:string
}

export const Message:React.FC<MessagePropsType> = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}