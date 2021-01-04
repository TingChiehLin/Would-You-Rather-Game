import React, { useState } from "react";
import "./Home.scss";

import QuestionContainer from "../QuestionContainer/QuestionContainer";
import SwitchQuestion from "../SwitchQuestion/SwitchQuestion";

import { connect } from "react-redux";

function Home(props) {

  const [selectedTab, setSelecTedTab] = useState("answered")

    // const selectedQuestion = Object.values(props.question);
    // const filteredQuestions = selectedQuestion.filter((selectedQuestion) => 
    // selectedQuestion.id === 'answered' ? '' : '')
    const filteredQuestions = []
  return (
    <div className="home-container">
      <SwitchQuestion setSelecTedTab={setSelecTedTab}/>
      <QuestionContainer questions={filteredQuestions}/>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    question: state.questions.question,
    answer: state.questions.answer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // loadQuestion: () => dispatch(getQuestion_result())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
