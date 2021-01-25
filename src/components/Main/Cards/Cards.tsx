import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import s from './Cards.module.css'
import {Card} from './Card/Card';
import {AppRootStateType} from '../../../redux/store';
import {CardType, getCardsTC} from '../../../redux/cards-reducer';
import {useParams} from 'react-router-dom';

type CardsPropsType = {
}


export const Cards = (props: CardsPropsType) => {
    const dispatch = useDispatch()

    const cards = useSelector<AppRootStateType, Array<CardType>>(state => state.cards.cards)
    //@ts-ignore
    const {id} = useParams()

    useEffect(() => {
        dispatch(getCardsTC(id))
    }, [dispatch])

    return (
        <div className={s.wrap}>

            <>
                <div className={s.table}>
                    <div className={s.question}>
                        Question
                    </div>
                    <div className={s.answer}>
                        Answer
                    </div>
                    <div className={s.grade}>
                        Grade
                    </div>
                    <div className={s.updated}>
                        Updated
                    </div>
                    <div className={s.buttons}>
                        <button>Add</button>
                    </div>
                </div>
                <div>
                    {cards.map(c => <Card question={c.question} answer={c.answer} updated={c.updated}
                                          cardsPack_id={c.cardsPack_id} grade={c.grade} user_id={c.user_id}/>)}
                </div>
            </>
        </div>
    )
}