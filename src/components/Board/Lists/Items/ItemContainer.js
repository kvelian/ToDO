import React from 'react';

import { Item } from "./Item";
import { DoneItem } from "./DoneItem";
import { EditableItem } from "./EditableItem";

export class ItemContainer extends React.Component {
    state = {isEdit: false};

    setIsEdit = (value) => this.setState({isEdit: value})

    render() {
        if (this.state.isEdit) {
            return <EditableItem item={this.props.item} setIsEdit={this.setIsEdit} editItem={this.props.editItem}/>
        }

        return this.props.item.done ?
            <DoneItem item={this.props.item} editItem={this.props.editItem}/> :
            <Item item={this.props.item} setIsEdit={this.setIsEdit} editItem={this.props.editItem} deleteItem={this.props.deleteItem}/>
    }
}