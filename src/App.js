import React, {useState} from 'react';
import Message from './components/Message.js';
import style from './components/css/style.css';
import header from './components/header.js';

function Counter() {
        let [count, setcount] = useState(0);
  return (
    <div className="main-div">
      <header/>
      <div className="sec-1">
          <h1>Counter</h1>
          <Message counter={count} />
          <br/>
          <button onClick={()=> setcount(++count)}> Update Counter</button>
      </div>
      <div className="sec-2">
          <h1> lighting</h1>
      </div>
    </div>
   
    
    
  );
}

export default Counter;
