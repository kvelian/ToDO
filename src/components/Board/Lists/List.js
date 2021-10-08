import {useState} from 'react';

import {ItemContainer} from "./Items/ItemContainer";
import {ButtonAddItem} from "../../buttons/Button";
import {editElement, deleteElement} from "../utils/array"

import "./list.css"

let index = 0

const makeItem = (value) => {
    return {
        value: value || "newItem",
        id: ++index,
        done: false
    }
}

export const List = () => {
    const [items, setItems] = useState([makeItem("item1")]);

    const addItem = (value) => setItems([...items, makeItem(value)])

    const editItem = (item) => setItems(editElement(items, item))

    const deleteItem = (item) => setItems(deleteElement(items, item))

    return (
        <>
            <ButtonAddItem onClick={() => {
                addItem()
            }}/>
            <div className="items">
                {items.filter(x => x.done === false).map(item => {
                        return <ItemContainer item={item} editItem={editItem} deleteItem={deleteItem}/>
                    }
                )}
            </div>
            <div className="doneItems">
                {items.filter(x => x.done === true).map(item => {
                        return <ItemContainer item={item} editItem={editItem}/>
                    }
                )}
            </div>
        </>
    )
}