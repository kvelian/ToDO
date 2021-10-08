import './styles/forListTitle.css'
import './styles/forListItems.css'

export const ButtonAddItem = ({onClick}) => (
    <div className="buttonAddItem" onClick={onClick}>
        <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="11.0145" y1="19.2345" x2="10.8267" y2="2.73559" stroke="#EEAF51" stroke-width="3.5"
                  stroke-linecap="square"/>
            <path d="M19.3962 10.8254L2.42562 10.8254" stroke="#EEAF51" stroke-width="3.5" stroke-linecap="square"/>
        </svg>
        <span>Добавить</span>
    </div>
)

export const Button = ({className, onClick, children}) => (
    <div className={className} onClick={onClick}>
        {(children) && (<span> {children} </span>)}
    </div>
)