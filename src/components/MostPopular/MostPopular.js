import React from 'react';
import { Link } from 'react-router-dom';
import './MostPopular.css';

import CardsBar from '../CardsBar/CardsBar';

function MostPopular(props) {

    return (
        <div className='pop'>
            <div className='popular'>
                <div className='popular__info'>
                    <p className='popular__title'>Most Popular</p>
                    <Link to='/mostpopular'>
                        <p className='popular__text'>See them all</p>
                    </Link>
                </div>
                <div className='popular__cards'>
                    <CardsBar 
                        articles = {props.articles}
                        isBlue = {true}
                        handleClick = {props.handleClick}
                    />
                </div>
            </div>
        </div>
    );
}

export default MostPopular;