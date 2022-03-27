import React from 'react';
import { Link } from 'react-router-dom';
import './FeaturedProject.css';
import RightBar from '../RightBar/RightBar.js';
import LeftBar from '../LeftBar/LeftBar.js';

function FeaturedProject(props) {

    return (
        <div className='container'>
            <div className='container__content'>
                <LeftBar 
                    featuredCard = {props.featuredCard}
                    handleClick = {props.handleClick}
                />
                <RightBar 
                    news = {props.news}
                />
            </div>
        </div>
    );
}

export default FeaturedProject;