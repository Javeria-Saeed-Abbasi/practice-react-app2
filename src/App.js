import React, {useState} from 'react';
import style from './components/css/style.css';
import Header from './components/Header.js';
import Message from './components/Message.js';
import Day   from './components/Day.js';
import sunImg from './images/sun3.gif';
import moonImg from './images/moon3.gif';



function App() {
        let [count, setcount] = useState(0); 
        let [isMorning, setMorning] = useState(false)

        let sunImg = <img className="sun" src="sunImg" alt="Sun Image" />
        let moonImg = <img className="moon" src="moonImg" alt="Moon Image" />
  return (
    <div className="main-div">
      {/* //Header */}
      <div>   
            <Header />
      </div>
       {/* //Section-1*/}
      <div>
          <div className="sec-1">
              <h1>Counter</h1>
              <Message counter={count} />
              <br/>
              <button className="updbtn" onClick={()=> setcount(++count)}> Update Counter</button>
              <button className="restbtn" onClick={()=> setcount(0)}> Reset</button>              

          </div>
        {/* //Section-2*/}
          <div className="sec-2">
          <h1> Today </h1>
          <button className="daybtn" onClick={()=> setMorning(!isMorning)}>Update Day</button>
          <div className={`day ${isMorning ? "Morning" : "Night"}`}>
            <span><h1>Good {isMorning ? "Morning" : "Night"}! </h1></span>
            {isMorning ? sunImg : moonImg}
          

        </div>

          </div>
      </div>
      
    </div>
   
    
    
  );
}

export default App;
