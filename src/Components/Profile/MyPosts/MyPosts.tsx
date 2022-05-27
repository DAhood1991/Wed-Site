import React from "react";
import s from './MyPosts.module.css'
import {Post} from "../Post/Post";


export const MyPosts = () => {
    return (
        <div className={s.item}>
          <h3>My posts</h3>
            <div>

                <div>
                    <textarea></textarea>
                </div>
                <button>add post</button>
            </div>
            <div className={s.item}>
                <Post message={"Hello AM fine"} like={0}/>
                <Post message={"YO"} like={23}/>
            </div>
        </div>

    )
}