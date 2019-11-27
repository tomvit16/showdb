import React, { Component } from 'react';
import './App.css';
import ChatArea from './chat-area';
import {db} from './firebase';


export default class App extends Component {




  state = {
  dbFirebaseoarams:   [],
}  
 

componentDidMount() {
  db.collection("chatAnswer")
    .get()
      .then((list) => {
          list.forEach((doc) => {
            // console.log(doc.data());
              this.setState(() => {
                const {dbFirebaseoarams} = this.state;
                const datavalue = new Date(+doc.id);
                const newDatevalue = {
                  year:  "" + (datavalue.getFullYear()),
                  month: "" + (datavalue.getMonth()),
                  day: "" + (datavalue.getDate()),
                  hours: (datavalue.getHours()),
                  minutes: (datavalue.getMinutes()),
                  seconds: (datavalue.getSeconds()),
                  text: (doc.data()),
                }
                const newArr = [
                  ...dbFirebaseoarams,
                  newDatevalue
                ]
                return {
                  dbFirebaseoarams: newArr,
                }        
        });
          })
        })
      
     
}
       
          
    

onState = () => {
  console.log(this);
}




render () {

  return (
    <div className="App">
       <ChatArea 
                            guestLists={this.state.dbFirebaseoarams} 
                            />   
                            <button onClick={this.onState}>
                            Click Me
                            </button>

    </div>
  );

}

  
}

