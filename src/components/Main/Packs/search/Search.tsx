import React, {ChangeEvent, useState, KeyboardEvent} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import cl from './Search.module.css';
import {PackType} from '../../../../redux/packs-reducer';
import {searchByNameAC} from "../../../../redux/filterOrSearch-reducer";
import {AppRootStateType} from "../../../../redux/store";


export const Search = () => {
    const dispatch = useDispatch()
    // let [nameSearch, setNameSearch] = useState<string>('')
    let nameSearch = useSelector<AppRootStateType,string>(state => state.search.nameSearch)
    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
        dispatch(searchByNameAC(e.currentTarget.value))
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        // setError(null);
        if (e.charCode === 13) {
            dispatch(searchByNameAC(e.currentTarget.value))
        }
    }

    return (
        <div className={cl.search}>
            <input type="text" value={nameSearch} onChange={onChangeHandler} onKeyPress={onKeyPressHandler} placeholder={'search'}/>
            {/*<button>Search</button>*/}
        </div>
    )
}