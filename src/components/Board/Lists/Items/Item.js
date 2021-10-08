import {Button} from "../../../buttons/Button";

import "./item.css"
import React from "react";

export class Item extends React.Component {
    render() {
        return (
            <div className="item">
                <Button className="buttonDoneItem" onClick={() => {
                    this.props.editItem({...this.props.item, done: true})
                }}/>
                <Button className="buttonChangeItem" onClick={() => {
                    this.props.setIsEdit(true)
                }}>
                    {this.props.item.value}
                </Button>
                <Button className="buttonDeleteItem" onClick={() => {
                    this.props.deleteItem(this.props.item)
                }}/>
            </div>
        )
    }
}