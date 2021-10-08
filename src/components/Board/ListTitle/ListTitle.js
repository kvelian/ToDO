import React from "react";

import {Button} from "../../buttons/Button";

import './listTitle.css'

export class ListTitle extends React.Component {
    render() {
        return (
            <div className='listTitle'>
                <Button className="buttonDeleteList" onClick={() => {
                    this.props.deleteList(this.props.list)
                }}/>
                <Button className='buttonChangeList' onClick={() => {
                    this.props.setIsEdit(true)
                }}>
                    {this.props.list.name}
                </Button>
            </div>
        )
    }
}