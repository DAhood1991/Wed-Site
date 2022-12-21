import React from "react";
import s from "./Messages.module.css"
import {DialogsItems} from "./DialogsItems/DialogsItems";
import {Message} from "./Message/Message";
import {DialogsPageType} from "../../State/State";

type MessagePropsType = {
   state:DialogsPageType
}

export const Messages:React.FC<MessagePropsType> = (props) => {

    const messageUser = props.state.messageData.map((el) => {
        return (<Message message={el.message}/>)
        })
    const dialogsUser = props.state.dialogsData.map((el)=>{
        return(
            <DialogsItems name={el.name} id={el.id}/>
        )
    })
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsUser}
            </div>
            <div className={s.messages}>
                {messageUser}
            </div>

        </div>
    )
}