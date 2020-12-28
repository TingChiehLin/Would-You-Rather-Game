import React, { useState, useEffect } from 'react'

import "../../utils/utility.scss";
import './Leaderboard.scss';

import TableCell from '../TableCell/TableCell';

import { login_result } from '../../store/action/index';
import { connect } from 'react-redux';

function Leaderboard(props) {

    // useEffect(()=> {
    //     props.loadUsers()
    // })

    const {userInfo} = props;
    const userDestails = Object.values(userInfo);
    const getObjectLength = (object) => {
       return Object.keys(object).length;
    }
    const leaderboard = [];

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
                    userDestails.map(e => {
                        const answers = getObjectLength(e.answers);
                        const questions = e.questions.length;
                        const score = answers + questions;
                        e.score = score;
                        return <TableCell key={e.id} score={e.score} userName={e.name} userAvatarUrl={e.avatarURL} answerQuestion={getObjectLength(e.answers)} createQuestion={e.questions.length}/>
                    }).sort((l1, l2) => (l2.scroe - l1.score))}
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
