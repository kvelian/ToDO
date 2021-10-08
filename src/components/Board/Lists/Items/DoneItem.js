import {Button} from "../../../buttons/Button";

import "./item.css"
import React from "react";

export class DoneItem extends React.Component {
    render() {
        return (
            <div className="doneItem">
                <Button className="buttonUnDoneItem" onClick={() => {
                    this.props.editItem({...this.props.item, done: false})
                }}/>
                <span className="doneItemSpan">{this.props.item.value}</span>
            </div>
        )
    }
}