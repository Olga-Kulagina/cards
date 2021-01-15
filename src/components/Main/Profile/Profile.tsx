import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {profileTC} from '../../../redux/profile-reducer';
import {AppRootStateType} from '../../../redux/store';
import s from './Profile.module.css'

export const Profile = () => {

    const dispatch = useDispatch()

    const error = useSelector<AppRootStateType, string>(state => state.profile.error)
    const isAuthorized = useSelector<AppRootStateType, boolean>(state => state.profile.isAuthorized)

    useEffect(() => {
        dispatch(profileTC())
    }, [])

    const userName = useSelector<AppRootStateType, string>(state => state.profile.name)

    if(isAuthorized) {
        return (
            <div className={s.center}>
                User name: {userName}
            </div>
        )
    }


    return (
        <div className={s.center}>
            {error}
        </div>
    )
}