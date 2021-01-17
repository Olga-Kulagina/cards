import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import {Login} from './Login/Login';
import {Registration} from './Registration/Registration';
import {Profile} from './Profile/Profile';
import {Error404} from './Error404/404';
import {PasswordRecovery} from './PasswordRecovery/PasswordRecovery';
import {EnteringNewPassword} from './EnteringNewPassword/EnteringNewPassword';
import {Test} from '../Test';
import {Logout} from './Logout/Logout';

export const PATH = {
    LOGIN: "/login",
    LOGOUT: '/logout',
    REGISTRATION: "/registration",
    PROFILE: "/profile",
    ERROR404: "/404",
    PASS_RECOVERY: "/password-recovery",
    PASS_NEW: "/entering-new-password/:token",
    TEST: "/test",
}

export const Main = () => {
    return (
        <div>
            <Switch>
                <Route path={"/"} exact render={() => <Redirect to={PATH.PROFILE}/>}/>


                <Route path={PATH.LOGIN} render={() => <Login/>}/>
                <Route path={PATH.LOGOUT} render={() => <Logout/>}/>
                <Route path={PATH.REGISTRATION} render={() => <Registration/>}/>
                <Route path={PATH.PROFILE} render={() => <Profile/>}/>
                <Route path={PATH.PASS_RECOVERY} render={() => <PasswordRecovery/>}/>
                <Route path={PATH.PASS_NEW} render={() => <EnteringNewPassword/>}/>
                <Route path={PATH.TEST} render={() => <Test/>}/>

                <Route render={() => <Error404/>}/>
            </Switch>
        </div>
    )
}