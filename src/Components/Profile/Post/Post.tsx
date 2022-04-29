import React from "react";
import s from './Post.module.css'

type PropsType={
    message:string
    like:number
}


export const Post = (props:PropsType) => {
    return (
        <div>
            <div className={s.item}>
                <img src= "https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425__340.png"/>
                {props.message}
                <li>Like</li> {props.like}
            </div>

        </div>

    )
}