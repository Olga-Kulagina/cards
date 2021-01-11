import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {registrationTC} from "../../../redux/registration-reduser";
import Input from "../../common/Input/Input";
import Button from "../../common/Button/Button";
import {AppRootStateType} from "../../../redux/store";

export const Registration = () => {
    const dispatch = useDispatch()
    const message = useSelector<AppRootStateType,string>((state) => state.registration.error)
    let [password, setPassword] = useState<string>('')
    let [email, setEmail] = useState<string>('')
    let [error, setError] = useState('')

    // const onSendHandler=(text:string,type:string)=>{
    //     if(text.trim()){
    //         if(type==='email'){
    //             setEmail(text)
    //         }else {
    //             setPassword(text)
    //         }
    //     }
    // }
    const onSendHandlerEmail = (text: string) => {
        // debugger
        if (text.trim()) {
            setEmail(text)
        } else {
            setError('email is required')
        }
    }
    const onSendHandlerPassw = (text: string) => {
        if (text.trim()) {
            setPassword(text)
        } else {
            setError('password is required')
        }

    }
    const onClick = () => {
        // debugger
        dispatch(registrationTC(email, password))
    }
    return (
        <div className={'registration'}>
            <h3>Registration</h3>
            <>
                <Input placeholder={'email'} type={'email'} onChangeText={onSendHandlerEmail}
                       className={'default'} error={error} value={email}/>
                {error && <p>error</p>}
            </>
            <>
                <Input placeholder={'password'} type={'password'} onChangeText={onSendHandlerPassw}
                       className={'default'} error={error} value={password}/>
                {error && <p>error</p>}
            </>
            <Button onClick={onClick}>send</Button>
            {message && <p>message</p>}
        </div>
    )
}