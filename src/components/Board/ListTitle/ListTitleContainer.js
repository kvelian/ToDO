import React from 'react';

import {ListTitle} from "./ListTitle";
import {EditableListTitle} from "./EditableListTitle";

export class ListTitleContainer extends React.Component {
    state = {isEdit: false};

    setIsEdit = (value) => this.setState({isEdit: value})

    render() {
        if (this.state.isEdit) return <EditableListTitle className='editableListTitle' list={this.props.list}
                                                         setIsEdit={this.setIsEdit} editList={this.props.editList}/>
        return <ListTitle className='listTitle' list={this.props.list} setIsEdit={this.setIsEdit}
                          deleteList={this.props.deleteList}/>
    }
}