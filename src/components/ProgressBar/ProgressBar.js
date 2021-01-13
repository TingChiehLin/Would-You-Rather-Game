import React from 'react';
import './ProgressBar.scss';

export default (props) => {
    const {value} = props;

    return (
        <div className="progress-container">
            <div style={{ width: `${value * 10}%` }}></div>
        </div>
    );
}

