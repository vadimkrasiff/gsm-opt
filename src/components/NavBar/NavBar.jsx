import React from "react";
import { NavLink } from "react-router-dom";
import css from "./NavBar.module.css";

const NavBar = () => {
    return <div className={css.panel}>
        <NavLink to={'/users'}>
            <div  >Пользователи</div>
        </NavLink>
        <NavLink to={'/pages'}>
            <div  >Страницы</div>
        </NavLink>
        <NavLink to={'/settings'} className={css.last}>
            <div  >Настройки</div>
        </NavLink>
    </div>
}

export default NavBar;