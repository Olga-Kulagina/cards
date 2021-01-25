import React from 'react'
import {useDispatch} from 'react-redux';
import s from './Pack.module.css'
import {deletePackTC, PackType, updatePackTC} from '../../../../redux/packs-reducer';
import {PATH} from '../../Main';
import {NavLink} from 'react-router-dom';


export const Pack = (props: PackType) => {
    const dispatch = useDispatch()

    let deletePack = () => {
        dispatch(deletePackTC(props._id))
    }
    let updatePack = () => {
        dispatch(updatePackTC(props._id))
    }

    return (
        <div className={s.tableRow}>
            <div className={s.name}>
                {props.name}
            </div>
            <div className={s.count}>
                {props.cardsCount}
            </div>
            <div className={s.updated}>
                {props.updated}
            </div>
            <div className={s.url}>
                {props.url}
            </div>
            <div className={s.buttons}>
                <button onClick={deletePack}>Del</button>
                <button onClick={updatePack}>Update</button>
                <NavLink to={`/cards/${props._id}`} activeClassName={s.active}>cards</NavLink>
            </div>
        </div>

    )
}