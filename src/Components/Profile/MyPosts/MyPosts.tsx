import React from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {TypePosts} from "../../../State/State";

type PostsPropsType ={
    posts:Array<TypePosts>
}

export const MyPosts:React.FC<PostsPropsType> = (props) => {

    const postItem = props.posts.map((el) => {
        return (<Post  message={el.message} likeCount={el.likeCount}/>)
    })

    return (
        <div className={s.item}>
            <h3>MoI posti</h3>
            <div>
                <textarea>PUSH ME</textarea>
            </div>
            <button>add post</button>

            <div className={s.item}>
                {postItem}
            </div>
        </div>

    )
}