import React from 'react'
import { useParams } from 'react-router-dom'
import './AnswerQuestion.scss';

const AnswerQuestion = (props) = {
    
    let {id} = props.useParams()
    return (
        <>
            <h1>{id}</h1>
            <div action="" className="post-container-question-option" onClick={saveUserAnswer}>
                <div className="post-container-question-option-center">
                    <input className="input-radio-size" type="radio" value="optionOne"
                        checked={optionSelected==="optionOne"}
                        onChange={() => setOptionSelected("optionOne")}
                    />
                    <label htmlFor="">be a Python developer</label>
                </div>
                <div className="post-container-question-option-center">
                    <input className="input-radio-size" type="radio" name="drone" value="optionTwo"
                        checked={optionSelected==="optionTwo"}
                        onChange={() => setOptionSelected("optionTwo")
                    }
                    />
                    <label htmlFor="">be a React developer</label>
                </div>
            </div>
        </>
    )
}

export default AnswerQuestion
