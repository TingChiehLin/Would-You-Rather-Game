import React from 'react'
import './QuestionContainer.scss';
import QuestionCard from '../QuestionCard/QuestionCard';
import { connect } from 'react-redux';

function QuestionContainer(props) {

    return (
        <div className="QuestionCard-container">
            {
                props.questions
                    .sort((question1, question2) => 
                    (question2.timestamp - question1.timestamp))
                .map(question =>
                    <QuestionCard key={question.id} question={question}/>
                )
            }
        </div>
    )
}


// userDestails.map(user => { 
//     const answers = getObjectLength(user.answers);
//     const questions = user.questions.length;
//     const score = answers + questions;
//     return {
//         ...user,
//         score
//     };
// }).sort((user1, user2) => (user2.score - user1.score)).map(user => (
//     <TableCell 
//         key={user.id} 
//         score={user.score} 
//         userName={user.name} 
//         userAvatarUrl={user.avatarURL} 
//         answerQuestion={getObjectLength(user.answers)} 
//         createQuestion={user.questions.length}/>
// ))

const mapStateToProps = (state) => {
    return {
        userInfo: state.users.result,
        authedUser: state.users.authedUser,
    };
}

export default connect(mapStateToProps)(QuestionContainer)