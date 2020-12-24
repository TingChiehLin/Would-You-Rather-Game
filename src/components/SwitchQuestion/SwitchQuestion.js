import React, { useState, useEffect} from 'react'
import './Switchquestion.scss';

function Switchquestion(props) {
    return (
        <div className="switchquestion-container">
            <button className="btn-non-answer">Unanswer Question</button>
            <button className="btn-answer">Answered Question</button>
        </div>
    )
}

export default Switchquestion
