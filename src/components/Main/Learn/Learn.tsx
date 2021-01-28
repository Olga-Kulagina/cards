import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../../../redux/store';
import {CardType, getCardsTC} from '../../../redux/cards-reducer';
import {useParams} from 'react-router-dom';
import Button from '../../common/Button/Button';
import s from './Learn.module.css'


const getCard = (cards: CardType[]) => {
    const sum = cards.reduce((acc, card) => acc + (6 - card.grade) * (6 - card.grade), 0);
    const rand = Math.random() * sum;
    const res = cards.reduce((acc: { sum: number, id: number }, card, i) => {
            const newSum = acc.sum + (6 - card.grade) * (6 - card.grade);
            return {sum: newSum, id: newSum < rand ? i : acc.id}
        }
        , {sum: 0, id: -1});
    console.log('test: ', sum, rand, res)

    return cards[res.id + 1];
}


export const Learn = () => {
    const dispatch = useDispatch()

    const cards = useSelector<AppRootStateType, Array<CardType>>(state => state.cards.cards)

    const [first, setFirst] = useState<boolean>(true);
    const [card, setCard] = useState<CardType>({
        user_id: '',
        updated: '',
        type: '',
        shots: 0,
        rating: 2,
        questionImg: '',
        question: '',
        grade: 3,
        created: '',
        comments: '',
        cardsPack_id: '',
        answer: ''
    })
    const [isChecked, setIsChecked] = useState<boolean>(false);

    //@ts-ignore
    const {id} = useParams()

    useEffect(() => {
        if (first) {
            dispatch(getCardsTC(id))
            setFirst(false)
        }

        if (cards.length > 0) setCard(getCard(cards));
    }, [dispatch, id, cards, first])


    const onCheckClick = () => {
        setIsChecked(true)
    }
    const onNextClick = () => {
        setIsChecked(false)

        if (cards.length > 0) {
            setCard(getCard(cards));
        }
    }

    return (
        <div className={s.center}>
            <div>
                Question: {card.question}
            </div>
            <div>
                <Button onClick={onCheckClick}>Check</Button>
            </div>
            {isChecked ?
                <div className={s.center}>
                    Answer: {card.answer}
                    <Button onClick={onNextClick}>Next</Button>
                </div>
                : ''
            }
        </div>
    )
}