import { useState } from 'react';

import { ListTitle } from "./ListTitle";
import { EditableListTitle } from "./EditableListTitle";

export const ListTitleContainer = ({list, editList, deleteList}) => {
    const [isEdit, setIsEdit] = useState(false)

    if (isEdit) return <EditableListTitle className='editableListTitle' list={list} setIsEdit={setIsEdit} editList={editList}/>

    return <ListTitle className='listTitle' list={list} setIsEdit={setIsEdit} deleteList={deleteList}/>
}