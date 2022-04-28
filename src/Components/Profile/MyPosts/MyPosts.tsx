import React from "react";
import s from './MyPosts.module.css'
import {Post} from "../Post/Post";

export const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>add post</button>
            </div>
            <div>
               <Post message={"Hello AM fine"}/>
                <Post message={"YO"}/>
            </div>
        </div>

    )
}