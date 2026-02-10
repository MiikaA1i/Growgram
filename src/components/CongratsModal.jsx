import React from 'react'
import ReactDOM from 'react-dom'
import Confetti from './Confetti.jsx'

export default function CongratsModal({ onRetry, onSave, onClose }) {
    console.log('CongratsModal opened')
    return ReactDOM.createPortal(
        (
            <div className='modal-container'>
                <button className='modal-underlay' onClick={onClose} />
                <div className='modal-content congrats'>
                    <Confetti />
                    <h2>Congratulations!</h2>
                    <p>You completed the 30-day program.</p>
                    <div className='congrats-buttons'>
                        <button onClick={onRetry}>Retry from Day 1</button>
                        <button onClick={onSave}>Save & Keep Unlocked</button>
                    </div>
                </div>
            </div>
        ),
        document.getElementById('portal')
    )
}
