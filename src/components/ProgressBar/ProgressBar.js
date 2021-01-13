import React from 'react';
import './ProgressBar.scss';

export default (props) => {
    const {value} = props;
    console.log(value);
    return (
        <div className="progress-container">
            <div style={{ width: `${value}%`}}></div>
        </div>
    );
}

