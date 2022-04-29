import React from "react";
import s from './MyPosts.module.css'
import {Post} from "../Post/Post";

export const MyPosts = () => {
    return (
        <div className={s.item}>
            My posts
            <div>
                <textarea></textarea>
                <button>add post</button>
            </div>
            <div className={s.item}>
               <Post message={"Hello AM fine"} like={0}/>
                <Post message={"YO"} like={23}/>
            </div>
        </div>

    )
}