import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import {Login} from './components/Login/Login';
import {Registration} from './components/Registration/Registration';
import {Profile} from './components/Profile/Profile';
import {Error404} from './components/Error404/404';
import {PasswordRecovery} from './components/PasswordRecovery/PasswordRecovery';
import {EnteringNewPassword} from './components/EnteringNewPassword/EnteringNewPassword';
import {Test} from './components/Test';


function App() {
    return (
        <div className="App">
            <div>
                <Route exact path={'/'} render={() => <div>kfkfk</div>}/>
                <Route path={'/login'} render={() => <Login/>}/>
                <Route path={'/registration'} render={() => <Registration/>}/>
                <Route path={'/profile'} render={() => <Profile/>}/>
                <Route path={'/404'} render={() => <Error404/>}/>
                <Route path={'/password-recovery'} render={() => <PasswordRecovery/>}/>
                <Route path={'/entering-new-password'} render={() => <EnteringNewPassword/>}/>
                <Route path={'/test'} render={() => <Test/>}/>
            </div>
        </div>
    );
}

export default App;
