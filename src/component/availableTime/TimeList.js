import React from 'react'
import {useState} from 'react';
import PopupComponent from '../popup/Popup';
import "./time.css"

const timesList = ['00:00','01:00','02:00','03:00','04:00','05:00','06:00','07:00','08:00','09:00','10:00','14:00','15:00']

const Time = ({time, onTimeSelect, selectedTime, onConfirm}) => {
const isButtonVisible = time === selectedTime ? true : false;
      return  <div className='timeContainer'>
                  <button className="timeButton" onClick={()=> onTimeSelect(time)}> {time} </button>
                {isButtonVisible &&  <button className="confirmButton" className='confirmButton' onClick={()=>onConfirm(time)}>Confirm</button>}
              </div>
}

function TimeList({showTime,date , onSelectTime}) {
console.log("showTime -->",showTime);
 const [selectedTime, setSelectedTime] = useState(null)
 const [showPopup, setShowPopup] = useState(false)

 function displayInfo(time) {
  console.log("setShowPopup -->",time);
   setSelectedTime(time);
}

function onConfirm(time) {
  setShowPopup(true);
}

function onClosePopup() {
  setShowPopup(false);
}

function handleTimeConfirm(reason) {
  console.log("handleTimeConfirm --> ",reason);
  setShowPopup(false);
  const timeObj = {
    date: date,
    time: selectedTime,
    reason: reason
  }
  onSelectTime(timeObj)
}

const Date = () =>{
return  <div>{date && date.toDateString()}</div>
}

return (
 <div className="timeListContainer">
   <Date />
  
 {showTime && <div >
   <ul>
   {timesList.map(time => {
    return <Time time={time} onTimeSelect={(value)=>displayInfo(value)} selectedTime={selectedTime} onConfirm={(value)=>onConfirm(value)}/>
     })}
     </ul>
    <div>
      {/* {info ? `Your appointment is set to ${event} ${props.date.toDateString()}` : null} */}
      <PopupComponent isShow={showPopup} onClose={onClosePopup} onConfirm={(value) => handleTimeConfirm(value)}/>
    </div>
 </div> || undefined }
 </div>
  )
}

export default TimeList;