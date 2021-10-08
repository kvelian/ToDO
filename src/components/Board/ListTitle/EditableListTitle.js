import React from 'react';

import { Button } from "../../buttons/Button";

export class EditableListTitle extends React.Component {
    state = {inputValue: this.props.list.name};

    setInputValue = (value) => this.setState({inputValue: value})

    render() {
        return (
            <div className={this.props.className}>
                <Button className="buttonDoneChangeList" onClick={() => {
                    this.props.editList({...this.props.list, name: this.state.inputValue})
                    this.props.setIsEdit(false)
                }}/>
                <input maxLength="40" onChange={(e) => {
                    this.setInputValue(e.target.value)
                }} value={this.state.inputValue}/>
            </div>
        );
    }
}