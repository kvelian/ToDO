import React from 'react';

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

export class List extends React.Component {

    state = {items: [makeItem("item1")]};

    addItem = (value) => this.setState({items: [...this.state.items, makeItem(value)]})

    editItem = (item) => this.setState({items: editElement(this.state.items, item)})

    deleteItem = (item) => this.setState({items: deleteElement(this.state.items, item)})

    render() {
        return (
            <>
                <ButtonAddItem onClick={() => {
                    this.addItem()
                }}/>
                <div className="items">
                    {this.state.items.filter(x => x.done === false).map(item => {
                            return <ItemContainer item={item} editItem={this.editItem} deleteItem={this.deleteItem}/>
                        }
                    )}
                </div>
                <div className="doneItems">
                    {this.state.items.filter(x => x.done === true).map(item => {
                            return <ItemContainer item={item} editItem={this.editItem}/>
                        }
                    )}
                </div>
            </>
        )
    }
}