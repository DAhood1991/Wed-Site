import React from "react";
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";


export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + " " + s.active}>
                    <NavLink to={'Andrey'} activeClassName={s.active} > Andrey</NavLink>
                </div>
                <div className={s.dialog}>
                    Barmaley
                </div>
                <div className={s.dialog}>
                    Serafim
                </div>
                <div className={s.dialog}>
                    Kratos
                </div>
                <div className={s.dialog}>
                    Zara
                </div>
                <div className={s.dialog}>
                    Petrovich
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>HI</div>
                <div className={s.message}>HI WAY NOT</div>
                <div className={s.message}>HI We are you from</div>
            </div>

        </div>
    )
}