import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {deleteAccTC, registrationTC} from "../../../redux/registration-reduser";
import Input from "../../common/Input/Input";
import Button from "../../common/Button/Button";
import {AppRootStateType} from "../../../redux/store";
import cl from './Registration.module.css';
import {Redirect} from 'react-router-dom';

export const Registration = () => {
    const dispatch = useDispatch()
    const errorMessage = useSelector<AppRootStateType, string>((state) => state.registration.error)
    const message = useSelector<AppRootStateType, string>((state) => state.registration.message)
    const registeredStatus = useSelector<AppRootStateType, boolean | null>((state) => state.registration.registeredStatus)
    let [password, setPassword] = useState<string>('')
    let [email, setEmail] = useState<string>('')
    let [error, setError] = useState<string>('')


    useEffect(() => {
        if (registeredStatus) {
            if (error === '') {
                setEmail('')
                setPassword('')
            }
        }
    }, [registeredStatus])

    const onSendHandlerEmail = (text: string) => {

        if (text.trim()) {
            setError('')
            setEmail(text)
        }
        // else {
        //     setError('email is required')
        // }
    }
    const onSendHandlerPassw = (text: string) => {
        if (text.trim()) {
            setPassword(text)
        }
        // else {
        //     setError('password is required')
        // }

    }
    const onClick = () => {

        dispatch(registrationTC(email, password))


    }

    // login: jhbjhj@mijni.ruj password: 12345678
    if (registeredStatus) {
        return <Redirect to={'/login'}/>
    }
    return (
        <div className={cl.registration}>
            <div className={cl.center}>
                <h3>Registration</h3>
                <>
                    <Input placeholder={'email'} type={'email'} onChangeText={onSendHandlerEmail}
                           className={'default'} error={error} value={email}/>
                </>
                <>
                    <Input placeholder={'password'} type={'password'} onChangeText={onSendHandlerPassw}
                           className={'default'} error={error} value={password}/>
                </>
                <Button onClick={onClick}>send</Button>

                {registeredStatus ? <p>{message}</p> : <p>{errorMessage}</p>}

            </div>

        </div>
    )
}