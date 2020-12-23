import React from 'react'
import './Page.scss';

import Switchquestion from '../Switchquestion/Switchquestion';
import Post from '../Post/Post';

function Page() {
    return (
        <div className="page-container">
            <Switchquestion/>
            <div>
                <Post/>
            </div>
        </div>
    )
}

export default Page
