import {useState} from 'react';

import { Button } from "../../buttons/Button";

export const EditableListTitle = ({className, list, setIsEdit, editList}) => {
    const [inputValue, setInputValue] = useState(list.name)
    return (
        <div className={className}>
            <Button className="buttonDoneChangeList" onClick={() => {
                editList({...list, name: inputValue})
                setIsEdit(false)
            }}/>
            <input maxLength="40" onChange={(e) => {
                setInputValue(e.target.value)
            }} value={inputValue}/>
        </div>
    );
}