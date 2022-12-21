import React from "react";
import s from "./news.module.css"

type NewsPropsType ={
    title:string
}

export const News:React.FC<NewsPropsType> = (props) => {
    return(
        <div className={s.content}>
            <h3>
                {props.title}
            </h3>
        </div>
    )
}