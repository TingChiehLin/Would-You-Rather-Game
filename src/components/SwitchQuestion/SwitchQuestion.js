import React from 'react'
import './SwitchQuestion.scss';

function SwitchQuestion() {
    return (
        <div className="switchquestion-container">
            <button className="btn-non-answer">Unanswer Question</button>
            <button className="btn-answer">Answered Question</button>
        </div>
    )
}

export default SwitchQuestion
