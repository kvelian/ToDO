import {Button} from "../../../buttons/Button";

import "./item.css"

export const DoneItem = ({item, editItem}) => (
    <div className="doneItem">
        <Button className="buttonUnDoneItem" onClick={() => {
            editItem({...item, done: false})
        }}/>
        <span className="doneItemSpan">{item.value}</span>
    </div>
)