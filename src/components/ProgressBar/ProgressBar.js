import React from 'react';
import './ProgressBar.scss';

const ProgressBar = (props) => {
    const {value} = props;
    return (
        <div className="progress-container">
            <div style={{ width: `${value}%`}}></div>
        </div>
    );
}

export default ProgressBar;