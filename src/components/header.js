import React, {useState} from 'react';
import style from './css/style.css';


function Header(){
    let [time, setTime] = useState(getTime());

    function getTime() {
        let currentTime = new Date();
        return{
          hours: currentTime.getHours(),
          minutes: currentTime.getMinutes(),
          seconds: currentTime.getSeconds(),
          ampm: currentTime.getHours() > 12 ? "Pm" : "Am"
        }
}
    let { hours, minutes, seconds, ampm } = time;

    let updateTime = () => setTime(getTime);
    setInterval(updateTime, 1000);
    return(
        <div className="header">
            <h1> Assignmnet # 03 || PANACLOUD BOOTCAMP 2020 </h1>
            <h3 className="time">
            Current Time : {hours === 0 ? 12 : hours > 12 ? `0${hours - 12}` : hours < 10 ? `0${hours}` : hours} : {
            minutes <= 9 ? `0${minutes}` : minutes} : {
            seconds <= 9 ? `0${seconds}` : seconds} {ampm} 
        </h3>

        </div>
        
    )
}

export default Header;