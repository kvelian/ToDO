import {useState} from 'react';

import {Button} from "../../../buttons/Button";

import "./item.css"

export const EditableItem = ({item, setIsEdit, editItem}) => {
    const [inputValue, setInputValue] = useState(item.value)

    function auto_grow(element) {
        element.style.height = "5px";
        element.style.height = (element.scrollHeight)+"px";
    }

    return (
        <div className="item">
            <textarea className="changeItemValueTextArea" maxLength="100"
                      onChange={(e) => {

                          auto_grow(e.target)
                          setInputValue(e.target.value)
                      }}
                       value={inputValue} required="required"/>

            <Button className="buttonDoneChangeItem" onClick={() => {
                if (inputValue) {
                    editItem({...item, value: inputValue})
                    setIsEdit(false)
                }
            }}/>
        </div>
    );
}