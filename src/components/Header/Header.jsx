import { Button, Layout } from "antd";
import React from "react";
import { NavLink } from "react-router-dom";
import css from "./Header.module.css";

let Header = () => {
    return <header>
        <div className={css.logo}>
            <NavLink to={"/"}>
            <div className={css.icon}></div>
            </NavLink>
        </div>
        <div className={css.navigator}>
            <NavLink to={"/users"}>Пользователи</NavLink>
            <NavLink to={"/pages"}>Страницы</NavLink>
            <NavLink to={"/settings"}>Настройки</NavLink>
        </div>
        <div className={css.userInfo}>
            <div className={css.login}>Красильников Вадим</div>
            <div>|</div>
            <div className={css.button}>Выйти</div>
        </div>
    </header>
}

export default Header;