import React from 'react'

import "../../utils/utility.scss";
import './Leaderboard.scss';

import TableCell from '../TableCell/TableCell';

import { user_result } from '../../store/action';
import { connect } from 'react-redux';

function Leaderboard(props) {

    const {userInfo} = props;
    const userDestails = Object.values(userInfo);
    const getObjectLength = (object) => {
       return Object.keys(object).length;
    }

    return (
        <div className="leaderboard-container">
            <div className="leaderboard-container-title">Leaderboard</div>
            <table className="content-table">
                <thead>
                    <tr>
                        <th>SCORE</th>
                        <th>USER</th>
                        <th>ANSWERED QUESTIONS</th>
                        <th>CREATED QUESTIONS</th>
                    </tr>
                </thead>
                <tbody>
                 {
                    userDestails.map(user => { 
                        const answers = getObjectLength(user.answers);
                        const questions = user.questions.length;
                        const score = answers + questions;
                        return {
                            ...user,
                            score
                        };
                    }).sort((user1, user2) => (user2.score - user1.score)).map(user => (
                        <TableCell 
                            key={user.id} 
                            score={user.score} 
                            userName={user.name} 
                            userAvatarUrl={user.avatarURL} 
                            answerQuestion={getObjectLength(user.answers)} 
                            createQuestion={user.questions.length}/>
                    ))
                 }
                </tbody>
            </table>

        </div>
    )
}

const mapStateToProps = state => {
    return {
        userInfo: state.users.result,
        authedUser: state.users.authedUser
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loadUsers: () => dispatch(user_result())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Leaderboard)
