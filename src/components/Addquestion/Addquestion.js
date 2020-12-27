import React, { useState } from 'react'
import './Addquestion.scss';
import { Link } from 'react-router-dom';
import Post from '../Post/Post';

function Addquestion() {

    return (
        <div className="askquestion-container">
            <div className="askquestion-container-title">Create a new question</div>
            <div className="askquestion-container-content">
                <div className="askquestion-container-subtitle">Would you rather?</div>
                <input type="text" className="askquestion-container-input" placeholder="Type Option A Text"/>
                <span className="askquestion-container-or">OR</span>
                <input type="text" className="askquestion-container-input" placeholder="Type Option B Text"/>
                <button className="askquestion-container-btn">Sumbit</button>
            </div>
        </div>
    )
}

export default Addquestion
