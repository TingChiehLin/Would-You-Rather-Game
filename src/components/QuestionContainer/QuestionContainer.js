import React from 'react'
import './QuestionContainer.scss';
import QuestionCard from '../QuestionCard/QuestionCard';

function QuestionContainer(props) {

    return (
        <div className="QuestionCard-container">
            {
                props.questions.map((question) => 
                    <QuestionCard question={question}/>
                )
            }
        </div>
    )
}

export default QuestionContainer
