import React from "react";
import s from './ProfileInfo.module.css';
import {MyPosts} from "../MyPosts/MyPosts";

export const ProfileInfo = () => {
  return(
      <div >
        <img src="https://www.iguides.ru/upload/medialibrary/9f8/9f8fdff471b7d281f81f694c100b5adc.png"/>
        <div>
          <div className={s.descriptionBlock}>
            ava+discription
          </div>
          <MyPosts/>
        </div>
      </div>
  )
}