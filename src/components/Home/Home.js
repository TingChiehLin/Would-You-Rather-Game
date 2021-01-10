import React, { useState } from "react";
import "./Home.scss";

import QuestionContainer from "../QuestionContainer/QuestionContainer";
import SwitchQuestion from "../SwitchQuestion/SwitchQuestion";

import { connect } from "react-redux";

function Home(props) {

  const [selectedTab, setSelecTedTab] = useState("unanswered")

  const userDetails = props.userInfo[props.authedUser];
  const selectedQuestions = Object.values(props.question);

  const answeredQuestions = selectedQuestions.filter((q) => {
    return userDetails.answers[q.id];
  })
  const unansweredQuestions = selectedQuestions.filter((q) => {
    return !userDetails.answers[q.id];
  })

  return (
    <div className="home-container">
      <SwitchQuestion setSelecTedTab={setSelecTedTab}/>
      <QuestionContainer questions={selectedTab === 'answered' ? 
        answeredQuestions 
        : unansweredQuestions
    }/>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    question: state.questions.question,
    answer: state.questions.answer,
    authedUser: state.users.authedUser,
    userInfo: state.users.result,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // loadQuestion: () => dispatch(getQuestion_result())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
