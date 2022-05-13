import React from "react";
import './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";

export const Profile = () => {
  return(
      <div >
          <img src="https://www.iguides.ru/upload/medialibrary/9f8/9f8fdff471b7d281f81f694c100b5adc.png"/>
          <div>
              <div>
                  ava+discription
              </div>
             <MyPosts/>
          </div>
      </div>
  )
}