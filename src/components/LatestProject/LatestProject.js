import React from 'react';
import { Link } from 'react-router-dom';
import './LatestProject.css';
//import RightBarL from '../RightBar/RightBar.js';
import LeftBarL from '../LeftBarL/LeftBarL.js';

function LatestProject(props) {

    return (
        <div className='containerL'>
            <div className='containerL__content'>
                <LeftBarL 
                    latestProject = {props.latestProject}
                />
            </div>
        </div>
    );
}

export default LatestProject;