import React,{ useState, useEffect } from 'react'
import './Home.scss';

import Page from '../Page/Page';
import SwitchQuestion from '../SwitchQuestion/SwitchQuestion';

import { saveQuestion, saveAnswer} from '../../store/action'; 
import { connect } from 'react-redux';

function Home(props) {

    const {sortedQuestions} = props
    console.log("sortedQuestions: ",sortedQuestions)

    useEffect(() => {
        // props.loadQuestion({});
        // props.loadAnswer({});
    })

    return (
        <div className="home-container">
            <SwitchQuestion/>
            <Page/>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        question: state.questions.question,
        answer: state.questions.answer
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loadQuestion: () => dispatch(saveQuestion()),
        loadAnswer: () => dispatch(saveAnswer())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)


