import React from 'react'
import './Switchquestion.scss';

function Switchquestion() {
    return (
        <div className="switchquestion-container">
            <button className="btn-non-answer">Unanswer Question</button>
            <button className="btn-answer">Answered Question</button>
        </div>
    )
}

export default Switchquestion
