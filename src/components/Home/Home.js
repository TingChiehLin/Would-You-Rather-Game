import React,{ useState, useEffect } from 'react'
import './Home.scss';

import Page from '../Page/Page';
import SwitchQuestion from '../SwitchQuestion/SwitchQuestion';

import { getQuestion_result} from '../../store/action'; 
import { connect } from 'react-redux';

function Home(props) {
    
    useEffect(() => {
        props.loadQuestion();
    })

    console.log("getQuestion_result: ",props.question)
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
        loadQuestion: () => dispatch(getQuestion_result())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)


