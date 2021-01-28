import React from 'react'
import {useFormik} from 'formik';
import s from './PasswordRecovery.module.css';
import Input from '../../common/Input/Input';
import Button from '../../common/Button/Button';
import {useDispatch, useSelector} from 'react-redux';
import {forgotTC} from '../../../redux/forgot-reducer';
import {AppRootStateType} from '../../../redux/store';

export const PasswordRecovery = () => {

    const dispatch = useDispatch()

    const requestMessage = useSelector<AppRootStateType, string>(state => state.forgot.message)
    const errorMessage = useSelector<AppRootStateType, string>(state => state.forgot.error)

    const formik = useFormik({
        initialValues: {
            email: '',
            from: 'test-front-admin <ai73a@yandex.by>',
            message: `<div style="background-color: lime; padding: 15px"> 
password recovery link:
 <a href='http://olga-kulagina.github.io/cards/#/entering-new-password/$token$'> link</a></div>`,
        },
        onSubmit: values => {
            dispatch(forgotTC(values))
        },
    });

    if(requestMessage !== '') {
        return (
            <div className={s.requestMessage}>{requestMessage}</div>
        )
    }

    return (
        <div>
            <form onSubmit={formik.handleSubmit} className={s.forgotForm}>

                <div className={s.center}>
                    <h3>Password Recovery</h3>
                    <label>
                        <Input
                            type='email'
                            placeholder='email'
                            {...formik.getFieldProps('email')}
                        />
                    </label>
                    <Button type="submit">Send</Button>
                    {errorMessage !== '' ? <div>{errorMessage}</div> : ''}
                </div>
            </form>
        </div>
    )
}