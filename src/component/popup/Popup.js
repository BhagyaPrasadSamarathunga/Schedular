import React, {useState} from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import '../popup/popup.css';

function PopupComponent({isShow, onClose, onConfirm}) {
    const [reason , setReason ]= useState('')
    function handleReasonInput(value){
        setReason(value)  
    }
    return (
            <Popup open={isShow} closeOnDocumentClick={false}>
                <div className='popup-container'>                
                    <label className='popup-lable'>
                        Please enter the reason for your call ?
                    </label>
                    <input className='popup-input' type="text" name="reason" onChange={event => handleReasonInput(event.target.value)} on />
                    <div className='popup-button-container'>
                        <button onClick={onClose} className="popup-cancel-button">Cancel</button>
                        <button onClick={()=>onConfirm(reason)} className="popup-confirm-button">Confirm</button>
                    </div>
                </div>
            </Popup>
    )
}
export default PopupComponent;