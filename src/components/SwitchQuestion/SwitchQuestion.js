import React, { useState, useEffect} from 'react'
import './SwitchQuestion.scss';

function SwitchQuestion(props) {
    return (
        <div className="switchquestion-container">
            <button className="btn-non-answer" onClick={() => props.setSelecTedTab("unanswered")}>Unanswer Question</button>
            <button className="btn-answer" onClick={() => props.setSelecTedTab("answered")}>Answered Question</button>
        </div>
    )
}

export default SwitchQuestion
