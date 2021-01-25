import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Header.module.css'
import {PATH} from '../Main/Main';

export const Header = () => {
    return (
        <div>
            <nav className={s.nav}>
                <div className={`${s.item} ${s.active}`}>
                    <NavLink to={PATH.LOGIN} activeClassName={s.active}>Login</NavLink>
                    <NavLink to={PATH.LOGOUT} activeClassName={s.active}>Logout</NavLink>
                    <NavLink to={PATH.REGISTRATION} activeClassName={s.active}>Registration</NavLink>
                    <NavLink to={PATH.PROFILE} activeClassName={s.active}>Profile</NavLink>
                    <NavLink to={PATH.PASS_RECOVERY} activeClassName={s.active}>Password recovery</NavLink>
                    <NavLink to={PATH.PASS_NEW} activeClassName={s.active}>Entering new password</NavLink>
                    <NavLink to={PATH.TEST} activeClassName={s.active}>Test</NavLink>
                    <NavLink to={PATH.PACKS} activeClassName={s.active}>Packs</NavLink>
                    <NavLink to={'/cards/:id'} activeClassName={s.active}>Cards</NavLink>
                </div>

            </nav>
        </div>
    )
}