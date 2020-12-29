import React from 'react'
import './TableCell.scss';

function TableCell(props) {

    const {key, score, userName, userAvatarUrl, answerQuestion, createQuestion} = props;

    return (
        <tr key={key}>
            <td>
                <span className="content-table-badge">{score}</span>
            </td>
            <td className="content-table-user">
                <img src={`${userAvatarUrl}`} alt={`${userName}`}/>
                <div>{userName}</div>
            </td>
            <td>{answerQuestion}</td>
            <td>{createQuestion}</td>
        </tr>
    )
}

export default TableCell
