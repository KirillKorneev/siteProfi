import React from 'react';
import { Link } from 'react-router-dom';
import './JustStarted.css';

import CardsBar from '../CardsBar/CardsBar';

function JustStarted(props) {

    return (
        <div className='started'>
            <div className='started__info'>
                <p className='started__title'>Just started</p>
                <Link to='/juststarted'>
                    <p className='started__text'>See them all</p>
                </Link>
            </div>
            <div className='started__cards'>
                <CardsBar 
                    articles = {props.articles}
                    isBlue = {false}
                    handleClick = {props.handleClick}
                />
            </div>
        </div>
    );
}

export default JustStarted;