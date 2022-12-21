import React from "react";
import s from './Post.module.css'

type PostPropsType ={
    message:string
    likeCount:number
}

export const Post:React.FC<PostPropsType> = (props) => {

    return (
        <div className={s.item} >
            <img src="https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425__340.png"/>
            <span>{props.message}</span>
            <li>Like</li>
            {props.likeCount}
        </div>
    )
}