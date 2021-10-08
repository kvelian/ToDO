import React from "react";

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

export class Board extends React.Component {
    state = {lists: [makeList("list1")]};

    addList = (name) => this.setState({lists: [...this.state.lists, makeList(name)]})

    editList = (list) => this.setState({lists: editElement(this.state.lists, list)})

    deleteList = (list) => this.setState({lists: deleteElement(this.state.lists, list)})

    render() {
        return (
            <>
                <div className='lists'>
                    {this.state.lists.map((list) => {
                            return (
                                <div className='list'>
                                    <ListTitleContainer list={list} editList={this.editList} deleteList={this.deleteList}/>
                                    <List/>
                                </div>
                            )
                        }
                    )}
                </div>
                <Button onClick={() => {
                    this.addList("New list")
                }}>
                    Add list +
                </Button>
            </>
        )
    }
}