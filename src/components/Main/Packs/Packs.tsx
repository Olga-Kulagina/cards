import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import s from './Packs.module.css'
import {AppRootStateType} from '../../../redux/store';
import {addPackTC, getPacksTC, PackType} from '../../../redux/packs-reducer';
import {Pack} from './Pack/Pack';
import {profileTC} from '../../../redux/profile-reducer';
import {Search} from "./search/Search";
import {Sort} from "./sort/Sort";


export const Packs = () => {
    const dispatch = useDispatch()

    const packs = useSelector<AppRootStateType, Array<PackType>>(state => state.packs.packs)
    const nameSearch = useSelector<AppRootStateType, string>(state => state.search.nameSearch)
    const abcType = useSelector<AppRootStateType, string>(state => state.search.abcType)
    const isAuthorized = useSelector<AppRootStateType, boolean>(state => state.profile.isAuthorized)

    useEffect(() => {
        dispatch(getPacksTC())
    }, [])

    const addPack = () => {
        dispatch(addPackTC())
    }

    let ollPacks = packs
    if(nameSearch){
        ollPacks= packs.filter(pack=> pack.name.includes(nameSearch) )
    }
    // let [ollPacks,setOllPacks]=useState(packs)
    // if(nameSearch){
    //     setOllPacks(ollPacks.filter(pack=> pack.name.includes(nameSearch) ))
    // }
    if(abcType==='ABC') {
        debugger
       ollPacks= [...ollPacks].sort((a, b) => {
            if (a.name > b.name) {return 1}
            if (a.name < b.name) {return -1}
            return 0
            })

        console.log(ollPacks);
    }
    if(abcType==='CBA') {
        ollPacks= ollPacks.sort((a, b) => {
            if (a.name < b.name) {return 1}
            if (a.name > b.name) {return -1}
            return 0
        })
        // setOllPacks(ollPacks)
    }
        // if (isAuthorized) {
    return (
        <div className={s.wrap}>
            <div className={s.flexWrap}>
                <Search/>
                <Sort items={[{title:"ABC",value:"ABC"},{title:"CBA",value:"CBA"},{title:"Rting",value:"Rting"}]}/>
            </div>
            <>
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
                    {ollPacks.map((p, index) => <Pack key={index} _id={p._id}
                                                   userId={p.userId} name={p.name} cardsCount={p.cardsCount}
                                                   updated={p.updated} url={p.url}/>)
                    }
                </div>
            </>
        </div>
    )
}

//
//     return (
//         <div className={s.center}>
//             you are not authorized /ᐠ-ꞈ-ᐟ\
//         </div>
//     )
//
//
// }