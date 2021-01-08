import React from 'react'
import {useFormik} from 'formik';
import s from './Login.module.css'
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../../../redux/store'
import {Redirect} from 'react-router-dom';
import {loginTC} from '../../../redux/login-reducer';

export const Login = () => {
    const dispatch = useDispatch()

    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.login.isLoggedIn)

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false
        },
        onSubmit: values => {
            dispatch(loginTC(values))
        },
    });

    if (isLoggedIn) {
        return <Redirect to={'/profile'}/>
    }

    return (
        <form onSubmit={formik.handleSubmit} className={s.loginForm}>
            <label>
                Email <input
                type='email'
                {...formik.getFieldProps('email')}
            />
            </label>
            <label>
                Password <input
                type='password'
                {...formik.getFieldProps('password')}
            />
            </label>
            <label>
                <input type='checkbox'
                       {...formik.getFieldProps('rememberMe')}
                /> Remember me
            </label>
            <button type="submit" className={s.submitBtn}>Sign in</button>
        </form>
    )
}