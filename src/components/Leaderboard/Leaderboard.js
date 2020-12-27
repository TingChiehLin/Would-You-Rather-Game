import React from 'react'

import "../../utils/utility.scss";
import './Leaderboard.scss';



function Leaderboard() {
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
                    <tr>
                        <td className="content-table-score">
                            <span className="content-table-badge">3</span>
                        </td>
                        <td className="content-table-user">
                            <img src="" alt=""/>
                            <div>name</div>
                        </td>
                        <td>4</td>
                        <td>2</td>
                    </tr>
                    <tr>
                        <td className="content-table-score">
                            <span className="content-table-badge">3</span>
                        </td>
                        <td className="content-table-user">
                            <img src="" alt=""/>
                            <div>name</div>
                        </td>
                        <td>4</td>
                        <td>2</td>
                    </tr>
                    <tr>
                        <td className="content-table-score">
                            <span className="content-table-badge">3</span>
                        </td>
                        <td className="content-table-user">
                            <img src="" alt=""/>
                            <div>name</div>
                        </td>
                        <td>4</td>
                        <td>2</td>
                    </tr>
                </tbody>
            </table>

        </div>
    )
}

export default Leaderboard
