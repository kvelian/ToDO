import {Button} from "../../../buttons/Button";

import "./item.css"

export const Item = ({item, setIsEdit, editItem, deleteItem}) => (
    <div className="item">
        <Button className="buttonDoneItem" onClick={() => {
            editItem({...item, done: true})
        }}/>
        <Button className="buttonChangeItem" onClick={() => {
            setIsEdit(true)
        }}>
            {item.value}
        </Button>
        <Button className="buttonDeleteItem" onClick={() => {
            deleteItem(item)
        }}/>
    </div>
)