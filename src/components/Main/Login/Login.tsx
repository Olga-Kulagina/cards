import React from 'react'
import {useFormik} from 'formik';
import s from './Login.module.css'
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../../../redux/store'
import {Redirect} from 'react-router-dom';
import {loginTC} from '../../../redux/login-reducer';
import Input from '../../common/Input/Input';
import Checkbox from '../../common/Checkbox/Checkbox';
import Button from '../../common/Button/Button';

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
        <div>

            <form onSubmit={formik.handleSubmit} className={s.loginForm}>

                <div className={s.center}>
                    <h3>Login</h3>
                    <label>
                        <Input
                            type='email'
                            placeholder='email'
                            {...formik.getFieldProps('email')}
                        />
                    </label>
                    <label>
                        <Input
                            type='password'
                            placeholder='password'
                            {...formik.getFieldProps('password')}
                        />
                    </label>
                    <label>
                        <Checkbox type='checkbox'
                                  {...formik.getFieldProps('rememberMe')}
                        /> Remember me
                    </label>
                    <Button type="submit">Sign in</Button>
                </div>
            </form>
        </div>

    )
}