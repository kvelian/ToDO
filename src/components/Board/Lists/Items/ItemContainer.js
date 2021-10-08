import {useState} from 'react';

import { Item } from "./Item";
import { DoneItem } from "./DoneItem";
import { EditableItem } from "./EditableItem";

export const ItemContainer = ({item, editItem, deleteItem}) => {
    const [isEdit, setIsEdit] = useState(false)

    if (isEdit) {
        return <EditableItem item={item} setIsEdit={setIsEdit} editItem={editItem}/>
    }

    return item.done ?
        <DoneItem item={item} editItem={editItem}/> :
        <Item item={item} setIsEdit={setIsEdit} editItem={editItem} deleteItem={deleteItem}/>
}