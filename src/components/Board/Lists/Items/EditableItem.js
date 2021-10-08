import React from 'react';

import {Button} from "../../../buttons/Button";

import "./item.css"

export class EditableItem extends React.Component {

    state = {inputValue: this.props.item.value};

    setInputValue = (value) => this.setState({inputValue: value})

    auto_grow = (element) => {
        element.style.height = "5px";
        element.style.height = (element.scrollHeight) + "px";
    }

    render() {
        return (
            <div className="item">
            <textarea className="changeItemValueTextArea" maxLength="100"
                      onChange={(e) => {
                          this.auto_grow(e.target)
                          this.setInputValue(e.target.value)
                      }}
                      value={this.state.inputValue} required="required"/>

                <Button className="buttonDoneChangeItem" onClick={() => {
                    if (this.state.inputValue) {
                        this.props.editItem({...this.props.item, value: this.state.inputValue})
                        this.props.setIsEdit(false)
                    }
                }}/>
            </div>
        );
    }
}