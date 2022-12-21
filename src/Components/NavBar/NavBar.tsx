import React from "react";
import s from './NavBar.module.css';
import {NavLink} from "react-router-dom";

export const NavBar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to={'profile'} activeClassName={s.active}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={'messages'} activeClassName={s.active}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={'news'} activeClassName={s.active}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={'music'} activeClassName={s.active}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={'settings'} activeClassName={s.active}>Settings</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={'Friends'} activeClassName={s.active}>Friends</NavLink>
                <div>
                    <NavLink to={'Fiends_link'} activeClassName={s.active}>
                        <img
                            src='https://images.pexels.com/photos/2050994/pexels-photo-2050994.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'/>
                    </NavLink>
                    <NavLink to={'Fiends_link'} activeClassName={s.active}>
                        <img
                            src='https://images.pexels.com/photos/2050994/pexels-photo-2050994.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'/>
                    </NavLink>
                    <NavLink to={'Fiends_link'} activeClassName={s.active}>
                        <img
                            src='https://images.pexels.com/photos/2050994/pexels-photo-2050994.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'/>
                    </NavLink>
                </div>

            </div>
        </nav>

    )
}