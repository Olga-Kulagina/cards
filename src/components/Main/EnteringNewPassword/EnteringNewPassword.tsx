import React, {useEffect, useState} from 'react'
import cl from "../Registration/Registration.module.css";
import Input from "../../common/Input/Input";
import Button from "../../common/Button/Button";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../redux/store";
import {registrationTC, setNewPassTC} from "../../../redux/registration-reduser";
import {Redirect, useParams } from 'react-router-dom';


export const EnteringNewPassword = () => {
    const dispatch = useDispatch()
    const errorMessage = useSelector<AppRootStateType, string>((state) => state.registration.error)
    const message = useSelector<AppRootStateType, string>((state) => state.registration.message)
    const registeredStatus = useSelector<AppRootStateType, boolean | null>((state) => state.registration.registeredStatus)
    let [password, setPassword] = useState<string>('')
    let [password1, setPassword1] = useState<string>('')
    let [error, setError] = useState<string>('')
let [messages,setMessages]=useState<string>(message)

    const onSendHandlerPass = (text: string) => {
        if (text.trim()) {
            setError('')
            setPassword(text)
        }
    }
    const onSendHandlerPass1 = (text: string) => {
        if (text.trim()) {
            setPassword1(text)
        }
    }
    // @ts-ignore
        const { token } = useParams();
    const onClickHandler = () => {
        if(password !== password1){
            setError('пароли не совпадают')
            setPassword1('')
        }else{
            dispatch(setNewPassTC(password, token))
        }
    }
//     debugger
// if(!messages){
//    return <Redirect to={'/packs'}/>
//    setTimeout(()=> {
//        setMessages('')
//    },3000)
//}
    return (
        <div className={cl.registration}>
            <div className={cl.center}>
           <h6> Entering New Password</h6>
                <>
                    <Input placeholder={'password'} type={'text'} onChangeText={onSendHandlerPass}
                           className={'default'} error={error} value={password}/>
                </>
                <>
                    <Input placeholder={'repeat password'} type={'text'} onChangeText={onSendHandlerPass1}
                           className={'default'} error={error} value={password1}/>
                </>
                <Button onClick={onClickHandler}>send</Button>

                {registeredStatus ? <p>{message}</p> : <p>{errorMessage}</p>}
            </div>
        </div>
    )
}