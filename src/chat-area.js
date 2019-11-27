import React, {Component} from 'react';
import './chat-area.css';


export default class ChatArea extends Component {


state = {
    
}
 

render () {

const {guestLists} = this.props;


const elements = guestLists.map((item) => {

    const textItem = item.text.name.map((item) => {
        return (
            <div className="text"> {item.label} </div>
        )
    })


    return (
        <li className="list-item">
        <div className="data-item">
        Дата: {item.year}.{item.month}.{item.day} Время: {item.hours}:{item.minutes}:{item.seconds}
        </div>
        <div className="list-group">
        {textItem}
        </div>
        </li>
    )


})

    return  (
        <ul className="list-chek-ul">           
           {elements}
        </ul>
        )
    };
           
}

