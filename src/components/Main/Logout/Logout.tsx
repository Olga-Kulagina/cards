import React from 'react'
import cl from '../Registration/Registration.module.css';
import Button from '../../common/Button/Button';
import {deleteAccTC} from '../../../redux/registration-reduser';
import {useDispatch} from 'react-redux';


export const Logout = () => {

    const dispatch = useDispatch()

    const deleteAcc = () => {
        // debugger
        dispatch(deleteAccTC())
    }

    return (
        <div className={cl.registration}>
            <div className={cl.center}>
                <h3>if you want to delete your account</h3>
                <Button onClick={deleteAcc}>click me</Button>
                <p>joke,it's logout</p>
            </div>
        </div>

    )
}