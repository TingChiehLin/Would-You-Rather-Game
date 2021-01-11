import React, { useState } from 'react'
import './Addquestion.scss';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { saveQuestion } from '../../store/action/question';

function Addquestion(props) {

    const [optionAText, setOptionTextA] = useState(''); 
    const [optionBText, setOptionTextB] = useState(''); 

    const userDetails = props.userInfo[props.authedUser];

    const texAtChangeHandler = event => {
        setOptionTextA(event.target.value);
    }

    const textBChangeHandler = event => {
        setOptionTextB(event.target.value);
    }

    const saveUserQuestion = () => {
        props.saveQuestion({userDetails,optionAText,optionBText})
    }

    return (
        <form className="askquestion-container">
            <div className="askquestion-container-title">Create a new question</div>
            <div className="askquestion-container-content">
                <div className="askquestion-container-subtitle">Would you rather?</div>
                <input type="text" 
                 className="askquestion-container-input"
                 placeholder="Type Option A Text"
                 value={optionAText}
                 onChange={texAtChangeHandler}
                />
                <span className="askquestion-container-or">OR</span>
                <input 
                 type="text" 
                 className="askquestion-container-input" 
                 placeholder="Type Option B Text"
                 value={optionBText}
                 onChange={textBChangeHandler}
                />
                <Link to="/" onClick={saveUserQuestion}>
                    <button className="askquestion-container-btn">Sumbit</button>
                </Link>
            </div>
        </form>
    )
}

const mapStateToProps = state => {
    return {
        userInfo: state.users.result,
        authedUser: state.users.authedUser,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        saveQuestion: (question) => dispatch(saveQuestion(question))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Addquestion)


