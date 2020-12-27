import React, { useState, useEffect } from 'react'

import "../../utils/utility.scss";
import './Leaderboard.scss';

import TableCell from '../TableCell/TableCell';

import { login_result } from '../../store/action/index';
import { connect } from 'react-redux';

function Leaderboard(props) {

    useEffect(()=> {
        props.loadUsers()
    })

    const {userInfo} = props;
    const userDestails = Object.values(userInfo);

    return (
        <div className="leaderboard-container">
            <div className="leaderboard-container-title">Leaderboard</div>
            <table className="content-table">
                <tr>
                    <th>SCORE</th>
                    <th>USER</th>
                    <th>ANSWERED QUESTIONS</th>
                    <th>CREATED QUESTIONS</th>
                </tr>
                <tbody>
                    {
                    userDestails.map(e => {
                        const answers = e.answers.length;
                        const questions = e.questions.length;
                        const score = answers + questions;
                        // leaderboard.sort((l1, l2) => (l2.score - l1.score));
                        
                        <TableCell key={e.id} score={e.id} userName={e.name} userAvatarUrl={e.avatarURL} answerQuestion={e.answers.length} createQuestion={e.questions.length}/>
                    })}
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
        loadUsers: () => dispatch(login_result())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Leaderboard)
