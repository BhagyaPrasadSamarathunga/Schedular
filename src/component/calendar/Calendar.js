import {useState} from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import TimeList from '../availableTime/TimeList.js';
import './calendar.css';

function AppCalendar() {

const [date, setDate] = useState(new Date());
const [showTime, setShowTime] = useState(false);
const [confirmedTime, setConfirmedTime] = useState();
const [isTimeConfirmed, setIsTimeConfirmed] = useState(false);
const [title, setTitle] = useState("Schedule your session");
var timeZoneFormatted = Intl.DateTimeFormat().resolvedOptions().timeZone;

function handleTimeConfirmation(selectedTime){
    if(selectedTime) {
        setIsTimeConfirmed(true);
    }
    setConfirmedTime(selectedTime);
    setTitle("Your Booking Confirmed");
}

const CalendarComponent = () => {
    return <><div className="calendarContainer">
    <Calendar onChange={setDate} value={date} onClickDay={() => setShowTime(true)} className="calendar"/>
    <div className="timezoneContainer"><span>Time Zone:</span>{timeZoneFormatted}</div>
</div>
<div className='time'>
    <TimeList showTime={showTime} date={date} onSelectTime={(time)=>handleTimeConfirmation(time)}/>  
</div></>
}

const ConfirmationMessage = () => {
       return <div className="confirmationMessage">
            <span>{confirmedTime.date.toDateString()}</span>
            <span>{confirmedTime.time}</span>
            <span>{confirmedTime.reason}</span>
        </div>
}

return (
 <div className="container">
    <h1 className="">{title}</h1>
    <div className='body'>
    {isTimeConfirmed && <ConfirmationMessage /> || <CalendarComponent/>}

    </div>
</div>
  )

}

export default AppCalendar;