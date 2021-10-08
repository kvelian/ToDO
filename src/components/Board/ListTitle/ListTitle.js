import {Button} from "../../buttons/Button";

import './listTitle.css'

export const ListTitle = ({list, setIsEdit, deleteList}) => (
    <div className='listTitle'>
        <Button className="buttonDeleteList" onClick={() => {
            deleteList(list)
        }}/>
        <Button className='buttonChangeList' onClick={() => {
            setIsEdit(true)
        }}>
            {list.name}
        </Button>
    </div>
)