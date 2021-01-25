import React from 'react'
import s from './Card.module.css'

type CardPropsType = {
    answer: string
    cardsPack_id: string
    grade: number
    question: string
    updated: string
    user_id: string
}


export const Card = (props: CardPropsType) => {

    return (
        <div className={s.wrap}>

            <>
                <div className={s.tableRow}>
                    <div className={s.question}>
                        {props.question}
                    </div>
                    <div className={s.answer}>
                        {props.answer}
                    </div>
                    <div className={s.grade}>
                        {props.grade}
                    </div>
                    <div className={s.updated}>
                        {props.updated}
                    </div>
                    <div className={s.buttons}>
                        <button>Del</button>
                        <button>Update</button>
                    </div>
                </div>
            </>
        </div>
    )
}