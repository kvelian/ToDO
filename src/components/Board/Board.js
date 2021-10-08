import {useState} from 'react';

import {List} from "./Lists/List";
import {Button} from "../buttons/Button"
import {ListTitleContainer} from "./ListTitle/ListTitleContainer";
import {editElement, deleteElement} from "./utils/array";

import './board.css'

let index = 0

const makeList = (value) => {
    return {
        name: value || "newList",
        id: ++index
    }
}

export const Board = () => {
    const [lists, setLists] = useState([makeList("list1")]);

    const addList = (name) => setLists([...lists, makeList(name)])

    const editList = (list) => setLists(editElement(lists, list))

    const deleteList = (list) => setLists(deleteElement(lists, list))

    return (
        <>
            <div className='lists'>
                {lists.map((list) => {
                        return (
                            <div className='list'>
                                <ListTitleContainer list={list} editList={editList} deleteList={deleteList}/>
                                <List/>
                            </div>
                        )
                    }
                )}
            </div>
            <Button onClick={() => {
                addList("New list")
            }}>
                Add list +
            </Button>
        </>
    )
}