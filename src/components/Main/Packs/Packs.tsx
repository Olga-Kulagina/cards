import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import s from './Packs.module.css'
import {AppRootStateType} from '../../../redux/store';
import {addPackTC, getPacksTC, PackType} from '../../../redux/packs-reducer';
import {Pack} from './Pack/Pack';
import {profileTC} from '../../../redux/profile-reducer';


export const Packs = () => {
    const dispatch = useDispatch()

    const packs = useSelector<AppRootStateType, Array<PackType>>(state => state.packs.packs)

    const isAuthorized = useSelector<AppRootStateType, boolean>(state => state.profile.isAuthorized)

    useEffect(() => {
        dispatch(getPacksTC())
    }, [])

    const addPack = () => {
        dispatch(addPackTC())
    }

    if (isAuthorized) {
        return (
            <div>
                <div className={s.table}>
                    <div className={s.name}>
                        Name
                    </div>
                    <div className={s.count}>
                        Cards count
                    </div>
                    <div className={s.updated}>
                        Updated
                    </div>
                    <div className={s.url}>
                        Url
                    </div>
                    <div className={s.buttons}>
                        <button onClick={addPack}>Add</button>
                    </div>
                </div>
                <div>
                    {packs.map((p, index) => <Pack key={index} _id={p._id} userId={p.userId} name={p.name}
                                                   cardsCount={p.cardsCount} updated={p.updated} url={p.url}/>)}
                </div>
            </div>
        )
    }


    return (
        <div className={s.center}>
            you are not authorized /ᐠ-ꞈ-ᐟ\
        </div>
    )


}